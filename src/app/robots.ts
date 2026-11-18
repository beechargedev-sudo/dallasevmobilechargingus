import type { MetadataRoute } from 'next';
import { NOINDEX_ALL, SITE_URL } from '@/lib/site';
export default function robots(): MetadataRoute.Robots {
  if (NOINDEX_ALL) return { rules: [{ userAgent: '*', disallow: '/' }] };
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL };
}
