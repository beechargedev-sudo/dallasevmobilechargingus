// Submit changed canonical URLs to IndexNow (Bing, Yandex, Seznam, Naver...). Google does not use IndexNow.
// Usage:
//   node scripts/indexnow.mjs --all                 submit every URL in the live sitemap (initial launch)
//   node scripts/indexnow.mjs /pricing /book        submit specific paths
//   node scripts/indexnow.mjs --changed <file>      submit paths listed in a file (one per line)
// Requires INDEXNOW_KEY and NEXT_PUBLIC_SITE_URL. Logs results to logs/indexnow.log. Max 10,000 URLs per request.
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://evmobilechargingdallas.us').replace(/\/$/, '');
const KEY = (process.env.INDEXNOW_KEY || '').trim();
if (!KEY) { console.error('INDEXNOW_KEY not set'); process.exit(1); }
const host = new URL(SITE).host;
const args = process.argv.slice(2);
mkdirSync('logs', { recursive: true });
const log = (o) => appendFileSync('logs/indexnow.log', JSON.stringify({ at: new Date().toISOString(), ...o }) + '\n');

// Rate guard: no more than one full submission per 24h, and skip URLs submitted in the last 6h.
const STATE = 'logs/indexnow-state.json';
const state = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : { lastAll: 0, sent: {} };
const now = Date.now();

async function sitemapUrls() {
  const xml = await (await fetch(`${SITE}/sitemap.xml`, { signal: AbortSignal.timeout(20000) })).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

let urls;
if (args.includes('--all')) {
  if (now - state.lastAll < 24 * 3600e3) { console.log('Full submission already sent in the last 24h; skipping.'); process.exit(0); }
  urls = await sitemapUrls();
} else if (args.includes('--changed')) {
  urls = readFileSync(args[args.indexOf('--changed') + 1], 'utf8').split('\n').map((s) => s.trim()).filter(Boolean);
} else urls = args;

urls = [...new Set(urls.map((u) => (u.startsWith('http') ? u : SITE + (u.startsWith('/') ? u : `/${u}`))))]
  .filter((u) => new URL(u).host === host)
  .filter((u) => !state.sent[u] || now - state.sent[u] > 6 * 3600e3);
if (!urls.length) { console.log('Nothing to submit.'); process.exit(0); }

// Verify the key file is reachable before submitting.
const keyRes = await fetch(`${SITE}/${KEY}.txt`, { signal: AbortSignal.timeout(15000) }).catch(() => null);
if (!keyRes || !keyRes.ok || (await keyRes.text()).trim() !== KEY) { log({ ok: false, error: 'key file not reachable' }); console.error('Key file not reachable at', `${SITE}/${KEY}.txt`); process.exit(1); }

for (let i = 0; i < urls.length; i += 10000) {
  const batch = urls.slice(i, i + 10000);
  // Try the shared endpoint first; on a 4xx (for example 403 for a new host) fall back to Bing's own endpoint.
  const ENDPOINTS = ['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow'];
  let res;
  for (const endpoint of ENDPOINTS) {
    let attempt = 0;
    while (attempt++ < 3) {
      res = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: batch }), signal: AbortSignal.timeout(30000),
      }).catch((e) => ({ ok: false, status: 0, text: async () => String(e) }));
      if (res.ok || (res.status >= 400 && res.status < 500 && res.status !== 429)) break;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
    if (res.ok) { console.log(`IndexNow endpoint: ${endpoint}`); break; }
    console.log(`IndexNow ${endpoint} -> HTTP ${res.status}`);
  }
  const body = res.ok ? '' : (await res.text()).slice(0, 300);
  log({ ok: res.ok, status: res.status, count: batch.length, body });
  console.log(`IndexNow: HTTP ${res.status} for ${batch.length} URL(s)`);
  if (res.ok) { for (const u of batch) state.sent[u] = now; if (args.includes("--all")) state.lastAll = now; }
}
writeFileSync(STATE, JSON.stringify(state));
