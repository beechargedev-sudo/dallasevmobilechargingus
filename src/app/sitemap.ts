import type { MetadataRoute } from 'next';
import { ROUTES } from '@/routes';
import { abs } from '@/lib/site';
import { isIndexable } from '@/lib/indexing';
export default function sitemap(): MetadataRoute.Sitemap { return ROUTES.filter(isIndexable).map((r) => ({ url: abs(r.path) })); }
