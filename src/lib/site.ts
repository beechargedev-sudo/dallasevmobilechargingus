/** Canonical production origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL for staging. */
export const SITE_URL: string = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://evmobilechargingdallas.us').replace(/\/$/, '');
export const abs = (path: string) => `${SITE_URL}${path}`;
/** Staging builds set NEXT_PUBLIC_NOINDEX=1 so nothing outside production is indexed. */
export const NOINDEX_ALL = process.env.NEXT_PUBLIC_NOINDEX === '1';
/** Bump when page content changes materially: feeds sitemap lastmod, WebPage and Article dateModified. */
export const CONTENT_UPDATED = '2026-11-22';
export const CONTENT_PUBLISHED = '2026-11-19';
