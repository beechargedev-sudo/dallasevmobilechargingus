import type { NextConfig } from 'next';

// Inline scripts are limited to Next.js hydration data, JSON-LD and the GA4 / Tag Manager / Clarity bootstraps.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.clarity.ms",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com",
  "frame-src https://www.googletagmanager.com",
  "form-action 'self'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
];

// STATIC_EXPORT=1 builds plain HTML into out/ for PHP/HTML shared hosting (headers, redirects and the
// tracker proxy then live in out/.htaccess and out/_a/proxy.php, written by scripts/static-extras.mjs).
const STATIC = process.env.STATIC_EXPORT === '1';

const nextConfig: NextConfig = {
  ...(STATIC ? { output: 'export' as const, images: { unoptimized: true } } : {}),
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  ...(STATIC ? {} : {
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    ];
  },
  async rewrites() {
    const hq = process.env.BEEHQ_ORIGIN;
    if (!hq) return [];
    return [
      { source: '/_a/t.js', destination: `${hq}/t.js` },
      { source: '/api/t', destination: `${hq}/api/t` },
      { source: '/api/t/', destination: `${hq}/api/t` },
    ];
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      // Old per-area and neighborhood pages are consolidated into one service-area page.
      { source: '/locations', destination: '/service-area/', permanent: true },
      { source: '/locations/:path*', destination: '/service-area/', permanent: true },
    ];
  },
  }),
};

export default nextConfig;
