import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { BRAND, SERVICES, AREAS, servicePath } from '@/lib/brand';
import { SITE_URL } from '@/lib/site';
import { SiteLayout } from '@/components/site/layout';
import { JsonLd } from '@/components/site/ui';
import { Analytics } from '@/components/Analytics';
import { TagManager, TagManagerNoScript } from '@/components/TagManager';
import { ClarityTracking } from '@/components/ClarityTracking';
import { BeeHqTracking } from '@/components/BeeHqTracking';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND.name,
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  formatDetection: { telephone: false },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION } : undefined,
  },
};
export const viewport: Viewport = { themeColor: '#0b0b0c', width: 'device-width', initialScale: 1 };

const org = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'AutomotiveBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: BRAND.name,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      image: `${SITE_URL}/images/og-default.jpg`,
      description: 'Mobile EV charging, fleet and business charging and EV charger installation across Dallas-Fort Worth, Texas.',
      foundingDate: String(BRAND.founded),
      email: BRAND.email,
      telephone: BRAND.phoneE164,
      address: { '@type': 'PostalAddress', streetAddress: BRAND.street, addressLocality: BRAND.locality, addressRegion: BRAND.region, postalCode: BRAND.zip, addressCountry: 'US' },
      areaServed: AREAS.map((a) => ({ '@type': 'City', name: `${a.name}, TX` })),
      contactPoint: { '@type': 'ContactPoint', telephone: BRAND.phoneE164, email: BRAND.email, contactType: 'customer service', areaServed: 'US', availableLanguage: 'English' },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Mobile EV charging services in Dallas', itemListElement: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.blurb, url: `${SITE_URL}${servicePath(s.slug)}` } })) },
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: BRAND.name, publisher: { '@id': `${SITE_URL}/#organization` }, inLanguage: 'en-US' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TagManagerNoScript />
        <SiteLayout>{children}</SiteLayout>
        <JsonLd data={org} />
        <Analytics />
        <TagManager />
        <ClarityTracking />
        <BeeHqTracking />
      </body>
    </html>
  );
}
