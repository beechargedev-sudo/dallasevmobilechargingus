import type { ReactNode } from 'react';
import { BRAND, SERVICES, servicePath } from '@/lib/brand';
import { GUIDES, guidePath } from '@/lib/content';
import { AboutPage, ContactPage, FaqPage, GuidePage, HomePage, LegalPage, LocationsPage, MarketPage, NotFoundPage, ResourcesHub, ServicePage, ServicesHub } from '@/views/pages';

export type Route = { path: string; kind: string; title: string; description: string; render: () => ReactNode };
const P = BRAND.phone;
const SUFFIX = ' | EV Mobile Charging';
/** First candidate that fits in 72 characters. */
const fit = (...c: string[]) => c.find((t) => t.length <= 72) ?? c[c.length - 1].slice(0, 72);
/** Trim to a word boundary under 165 characters. */
const desc = (s: string) => (s.length <= 165 ? s : `${s.slice(0, 162).replace(/\s+\S*$/, '')}...`);

const RAW: Route[] = [
  { path: '/', kind: 'home', title: 'Mobile EV Charging Dallas | EV Mobile Charging Dallas', description: `EV Mobile Charging Dallas brings mobile DC fast charging to EV drivers, fleets and businesses across the Dallas-Fort Worth area. Call ${P} for a quote and coverage.`, render: () => <HomePage /> },
  { path: '/services/', kind: 'hub', title: 'Mobile EV Charging Services in Dallas | EV Mobile Charging', description: `Emergency EV charging, fleet and business charging and charger installation in Dallas from EV Mobile Charging Dallas. Call ${P}.`, render: () => <ServicesHub /> },
  ...SERVICES.map((s): Route => ({
    path: servicePath(s.slug), kind: 'service', title: fit(`${s.title} Dallas${SUFFIX}`, `${s.title} Dallas`),
    description: desc(`${s.blurb} Call EV Mobile Charging at ${P} for a quote.`),
    render: () => <ServicePage service={s} />,
  })),
  { path: '/service-area/', kind: 'locations', title: 'Service Area: Mobile EV Charging in Dallas-Fort Worth', description: `Mobile EV charging coverage across the Dallas-Fort Worth area. Staff confirm each address by phone. Call ${P} to check your location.`, render: () => <LocationsPage /> },
  { path: '/dallas-ev-data/', kind: 'market', title: 'Dallas EV Data: Registrations, Charging and Winter Storms', description: 'Sourced public data on Texas EV registrations, Dallas charging plans, North Texas grants, DFW Airport traffic and cold-weather charging, with every source linked.', render: () => <MarketPage /> },
  { path: '/resources/', kind: 'hub', title: 'EV Charging Guides and Resources | EV Mobile Charging Dallas', description: `Plain guides on EV charging levels, charging time, winter range, road trips and home installs in Dallas. Call EV Mobile Charging at ${P} for help.`, render: () => <ResourcesHub /> },
  ...GUIDES.map((g): Route => ({ path: guidePath(g.slug), kind: 'guide', title: fit(`${g.title}${SUFFIX}`, g.title), description: desc(`${g.description} Call EV Mobile Charging at ${P} for mobile charging in Dallas.`), render: () => <GuidePage guide={g} /> })),
  { path: '/about/', kind: 'about', title: 'About EV Mobile Charging Dallas | Mobile EV Charging', description: `EV Mobile Charging Dallas, founded in 2020, runs mobile EV charging in 30+ states and serves Dallas. Call ${P} to talk with the team.`, render: () => <AboutPage /> },
  { path: '/contact/', kind: 'contact', title: 'Contact EV Mobile Charging Dallas | Mobile EV Charging', description: `Call EV Mobile Charging at ${P} or email ${BRAND.email} for mobile EV charging, fleet quotes and charger installs in Dallas.`, render: () => <ContactPage /> },
  { path: '/faq/', kind: 'faq', title: 'Mobile EV Charging FAQ Dallas | EV Mobile Charging', description: `Answers on mobile EV charging, coverage, fleets and charger installation across the Dallas-Fort Worth area. Call EV Mobile Charging at ${P}.`, render: () => <FaqPage /> },
  { path: '/privacy/', kind: 'legal', title: 'Privacy Notice | EV Mobile Charging Dallas', description: 'Privacy notice for the EV Mobile Charging Dallas website. Draft pending owner review.', render: () => <LegalPage kind="privacy" /> },
  { path: '/terms/', kind: 'legal', title: 'Terms of Service | EV Mobile Charging Dallas', description: 'Terms of service for the EV Mobile Charging Dallas website. Draft pending owner review.', render: () => <LegalPage kind="terms" /> },
];
export const ROUTES: Route[] = RAW.map((r) => (r.description.length > 165 ? { ...r, description: desc(r.description.replace(/ Call EV Mobile Charging at /, ' Call ')) } : r));
export const NOT_FOUND = { path: '/404/', kind: 'notfound', title: 'Page Not Found | EV Mobile Charging Dallas', description: '', render: () => <NotFoundPage /> } as const;
const map = new Map(ROUTES.map((r) => [r.path, r]));
export const resolveRoute = (path: string): Route | typeof NOT_FOUND => map.get(path) ?? NOT_FOUND;
