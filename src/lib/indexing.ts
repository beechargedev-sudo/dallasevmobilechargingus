import { NOINDEX_ALL } from './site';
const NOINDEX_KINDS = new Set(['legal', 'notfound']);
export function isIndexable(route: { path: string; kind: string }) {
  return !NOINDEX_ALL && !NOINDEX_KINDS.has(route.kind);
}
