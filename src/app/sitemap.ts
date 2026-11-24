import type { MetadataRoute } from 'next';
import { ROUTES } from '@/routes';
import { abs, CONTENT_UPDATED } from '@/lib/site';
import { isIndexable } from '@/lib/indexing';
const priority = (kind: string, path: string) => (path === '/' ? 1 : ['hub', 'service', 'locations', 'market'].includes(kind) ? 0.8 : 0.6);
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.filter(isIndexable).map((r) => ({ url: abs(r.path), lastModified: CONTENT_UPDATED, changeFrequency: 'monthly' as const, priority: priority(r.kind, r.path) }));
}

export const dynamic = 'force-static';
