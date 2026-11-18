import Script from 'next/script';

// Company dashboard counter: counts phone-link taps per page. No cookies and no personal data.
// The script and its beacon are served through this site's own paths (see rewrites in next.config.ts),
// so the page source and browser requests only ever reference this domain.
const SITE_ID = process.env.NEXT_PUBLIC_BEEHQ_SITE_ID || '';
export function BeeHqTracking() {
  if (!SITE_ID) return null;
  return <Script id="site-counter" src="/_a/t.js" data-site={SITE_ID} strategy="afterInteractive" />;
}
