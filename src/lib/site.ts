/** Canonical production origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL for staging. */
export const SITE_URL: string = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dallasevmobilecharging.us').replace(/\/$/, '');
export const abs = (path: string) => `${SITE_URL}${path}`;
/** Staging builds set NEXT_PUBLIC_NOINDEX=1 so nothing outside production is indexed. */
export const NOINDEX_ALL = process.env.NEXT_PUBLIC_NOINDEX === '1';
