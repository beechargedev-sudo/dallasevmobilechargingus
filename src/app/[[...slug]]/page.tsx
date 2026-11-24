import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ROUTES, resolveRoute, NOT_FOUND } from '@/routes';
import { BRAND } from '@/lib/brand';
import { abs, CONTENT_UPDATED, CONTENT_PUBLISHED } from '@/lib/site';
import { JsonLd } from '@/components/site/ui';
import { isIndexable } from '@/lib/indexing';

export const dynamicParams = false;

const toPath = (slug?: string[]) => (slug?.length ? `/${slug.join('/')}/` : '/');

export function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.path.split('/').filter(Boolean) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const route = resolveRoute(toPath((await params).slug));
  if (route === NOT_FOUND) return { title: route.title, robots: { index: false, follow: false } };
  const url = abs(route.path);
  const index = isIndexable(route);
  return {
    title: { absolute: route.title },
    description: route.description,
    alternates: { canonical: url },
    robots: index ? { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } : { index: false, follow: true },
    openGraph: { type: route.kind === 'post' ? 'article' : 'website', url, title: route.title, description: route.description, siteName: BRAND.name, locale: 'en_US', images: [{ url: abs('/images/og-default.jpg'), width: 1200, height: 630, alt: 'EV Mobile Charging Dallas' }] },
    twitter: { card: 'summary_large_image', title: route.title, description: route.description, images: [abs('/images/og-default.jpg')] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const route = resolveRoute(toPath((await params).slug));
  if (route === NOT_FOUND) notFound();
  const type = route.kind === 'contact' ? 'ContactPage' : route.kind === 'about' ? 'AboutPage' : ['hub', 'locations'].includes(route.kind) ? 'CollectionPage' : 'WebPage';
  return (
    <>
      {route.render()}
      <JsonLd data={{ '@context': 'https://schema.org', '@type': type, '@id': `${abs(route.path)}#webpage`, url: abs(route.path), name: route.title, description: route.description, inLanguage: 'en-US', isPartOf: { '@id': `${abs('/')}#website` }, about: { '@id': `${abs('/')}#organization` }, primaryImageOfPage: { '@type': 'ImageObject', url: abs('/images/og-default.jpg'), width: 1200, height: 630 }, datePublished: CONTENT_PUBLISHED, dateModified: CONTENT_UPDATED }} />
    </>
  );
}
