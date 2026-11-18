// Crawls a running site and checks every sitemap URL for SEO essentials.
// Usage: BASE=http://127.0.0.1:3000 node scripts/check-site.mjs  (CANONICAL defaults to production URL)
const BASE = (process.env.BASE || 'http://127.0.0.1:3000').replace(/\/$/, '');
const CANON = (process.env.CANONICAL || process.env.NEXT_PUBLIC_SITE_URL || 'https://dallasevmobilecharging.us').replace(/\/$/, '');
const problems = [];
const add = (u, m) => problems.push(`${u}: ${m}`);

const locs = async (url) => { const x = await (await fetch(url)).text(); const l = [...x.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]); return x.includes('<sitemapindex') ? (await Promise.all(l.map((u) => locs(u.replace(CANON, BASE))))).flat() : l; };
const paths = (await locs(`${BASE}/sitemap.xml`)).map((u) => u.replace(CANON, '') || '/');
console.log(`Checking ${paths.length} sitemap URLs on ${BASE}`);
const titles = new Map(), descs = new Map(), internal = new Set();

async function check(path) {
  const res = await fetch(BASE + path, { redirect: 'manual' });
  if (res.status !== 200) return add(path, `status ${res.status}`);
  const html = await res.text();
  const one = (re) => (html.match(re) || [])[1];
  const title = one(/<title>([^<]*)<\/title>/);
  const desc = one(/<meta name="description" content="([^"]*)"/);
  const canonical = one(/<link rel="canonical" href="([^"]*)"/);
  const robots = one(/<meta name="robots" content="([^"]*)"/);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (!title) add(path, 'missing <title>'); else { if (title.length > 72) add(path, `title ${title.length} chars`); (titles.get(title) || titles.set(title, []).get(title)).push(path); }
  if (!desc) add(path, 'missing meta description'); else { if (desc.length > 165 || desc.length < 70) add(path, `description ${desc.length} chars`); (descs.get(desc) || descs.set(desc, []).get(desc)).push(path); }
  if (canonical !== CANON + path) add(path, `canonical mismatch: ${canonical}`);
  if (robots && /noindex/.test(robots)) add(path, 'noindex on sitemap URL');
  if (h1s !== 1) add(path, `${h1s} <h1> tags`);
  if (!html.includes('application/ld+json')) add(path, 'no JSON-LD');
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch { add(path, 'invalid JSON-LD'); } }
  for (const m of html.matchAll(/<img [^>]*>/g)) if (!/ alt="/.test(m[0])) add(path, 'img without alt');
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) if (!m[1].startsWith('/_next')) internal.add(m[1]);
}
const queue = [...paths];
await Promise.all(Array.from({ length: 8 }, async () => { while (queue.length) await check(queue.shift()); }));
for (const [t, p] of titles) if (p.length > 1) add(p.join(', '), `duplicate title "${t}"`);
for (const [d, p] of descs) if (p.length > 1) add(p.slice(0, 3).join(', '), 'duplicate description');

// Broken internal links
const assets = /\.(png|jpe?g|webp|avif|svg|ico|txt|xml|webmanifest)$/;
const links = [...internal].filter((l) => !paths.includes(l));
for (const l of links) {
  const r = await fetch(BASE + l, { redirect: 'manual' });
  if (r.status >= 400) add(l, `broken internal link (${r.status})`);
  else if (r.status >= 300 && !assets.test(l)) add(l, `internal link redirects (${r.status}) – link to final URL`);
}
// Technical checks
const nf = await fetch(`${BASE}/this-page-does-not-exist-xyz`);
if (nf.status !== 404) add('/this-page-does-not-exist-xyz', `expected 404, got ${nf.status}`);
const rb = await (await fetch(`${BASE}/robots.txt`)).text();
if (!rb.includes('Sitemap:')) add('/robots.txt', 'missing Sitemap line');

console.log(problems.length ? `\n${problems.length} problem(s):\n- ${problems.join('\n- ')}` : '\nAll checks passed.');
process.exit(problems.length ? 1 : 0);
