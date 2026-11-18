'use client';
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }

/** Push a GA4 event. No PII: never pass names, emails, phone numbers or free text. */
export function track(event: string, params: Record<string, string | number | boolean | undefined> = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') window.gtag('event', event, params);
}

const KEYS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

/** First-touch attribution stored for the session so ad clicks survive navigation. */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const stored = JSON.parse(sessionStorage.getItem('bc_attr') || '{}');
    let changed = false;
    for (const k of KEYS) { const v = params.get(k); if (v && !stored[k]) { stored[k] = v.slice(0, 200); changed = true; } }
    if (!stored.landing_page) { stored.landing_page = window.location.pathname; changed = true; }
    if (!stored.referrer && document.referrer && !document.referrer.includes(window.location.host)) { stored.referrer = document.referrer.slice(0, 200); changed = true; }
    if (changed) sessionStorage.setItem('bc_attr', JSON.stringify(stored));
  } catch { /* storage unavailable */ }
}
export function getAttribution(): Record<string, string> {
  try { return JSON.parse(sessionStorage.getItem('bc_attr') || '{}'); } catch { return {}; }
}
export function getHutk() {
  const m = typeof document !== 'undefined' ? document.cookie.match(/(?:^|; )hubspotutk=([^;]+)/) : null;
  return m ? decodeURIComponent(m[1]) : undefined;
}
