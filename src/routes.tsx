import type { ReactNode } from 'react';
import { BRAND, SERVICES, AREAS, HOODS, servicePath, areaPath, hoodPath } from '@/lib/brand';
import { HoodPage, AreaPage, AboutPage, ContactPage, FaqPage, HomePage, LegalPage, LocationsPage, NotFoundPage, ServicePage, ServicesHub } from '@/views/pages';

export type Route = { path: string; kind: string; title: string; description: string; render: () => ReactNode };
const P = BRAND.phone;

export const ROUTES: Route[] = [
  { path: '/', kind: 'home', title: 'Mobile EV Charging Dallas | EV Mobile Charging Dallas', description: `EV Mobile Charging Dallas brings mobile DC fast charging to EV drivers, fleets and businesses in Dallas-Fort Worth. Call ${P} for a quote and coverage.`, render: () => <HomePage /> },
  { path: '/services/', kind: 'hub', title: 'Mobile EV Charging Services in Dallas | EV Mobile Charging Dallas', description: `Emergency EV charging, fleet and business charging and charger installation in Dallas-Fort Worth from EV Mobile Charging Dallas. Call ${P}.`, render: () => <ServicesHub /> },
  ...SERVICES.map((s): Route => ({
    path: servicePath(s.slug), kind: 'service', title: `${s.title} Dallas | EV Mobile Charging`,
    description: `${s.blurb} Call EV Mobile Charging at ${P} for a quote.`.slice(0, 165),
    render: () => <ServicePage service={s} />,
  })),
  { path: '/locations/', kind: 'locations', title: 'EV Charging Service Areas in DFW | EV Mobile Charging Dallas', description: `EV Mobile Charging Dallas serves Dallas, Fort Worth, Plano, Irving, Arlington and more. Call ${P} to confirm coverage at your address.`, render: () => <LocationsPage /> },
  ...AREAS.map((a): Route => ({ path: areaPath(a.slug), kind: 'area', title: `Mobile EV Charging ${a.name} TX | EV Mobile Charging`, description: `${a.intro.split(', ')[0].slice(0,100)}. Call ${P} for a quote.`.replace('..','.').slice(0,165), render: () => <AreaPage area={a} /> })),
  ...HOODS.map((h): Route => ({ path: hoodPath(h), kind: 'hood', title: `Mobile EV Charging ${h.name} ${h.area.name} | EV Mobile Charging`.slice(0, 72), description: `Mobile EV charging in ${h.name}, ${h.area.name}: emergency charging, fleets and installs. Call ${P} to confirm coverage and get a quote.`, render: () => <HoodPage hood={h} /> })),
  { path: '/about/', kind: 'about', title: 'About EV Mobile Charging Dallas | Mobile EV Charging', description: `EV Mobile Charging Dallas, founded in 2020 and based in Dallas, runs mobile EV charging in 30+ states. Call ${P} to talk with the team.`, render: () => <AboutPage /> },
  { path: '/contact/', kind: 'contact', title: 'Contact EV Mobile Charging Dallas | Mobile EV Charging', description: `Call EV Mobile Charging at ${P} or email info@beechargedev.com for mobile EV charging, fleet quotes and charger installs in Dallas.`, render: () => <ContactPage /> },
  { path: '/faq/', kind: 'faq', title: 'Mobile EV Charging FAQ Dallas | EV Mobile Charging Dallas', description: `Answers on mobile EV charging, coverage, fleets and charger installation in Dallas-Fort Worth. Call EV Mobile Charging at ${P}.`, render: () => <FaqPage /> },
  { path: '/privacy/', kind: 'legal', title: 'Privacy Notice | EV Mobile Charging Dallas', description: 'Privacy notice for the EV Mobile Charging Dallas website. Draft pending owner review.', render: () => <LegalPage kind="privacy" /> },
  { path: '/terms/', kind: 'legal', title: 'Terms of Service | EV Mobile Charging Dallas', description: 'Terms of service for the EV Mobile Charging Dallas website. Draft pending owner review.', render: () => <LegalPage kind="terms" /> },
];
export const NOT_FOUND = { path: '/404/', kind: 'notfound', title: 'Page Not Found | EV Mobile Charging Dallas', description: '', render: () => <NotFoundPage /> } as const;
const map = new Map(ROUTES.map((r) => [r.path, r]));
export const resolveRoute = (path: string): Route | typeof NOT_FOUND => map.get(path) ?? NOT_FOUND;
