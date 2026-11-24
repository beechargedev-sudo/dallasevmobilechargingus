import { Link } from '@/lib/router';
import { Check, Zap, Building2, House, Warehouse, Package, MapPin, Phone, Mail, ShieldCheck, Clock, Wrench, ArrowUpRight, Car, Truck, Hotel, Landmark, KeyRound, Briefcase, BookOpen, Route as RouteIcon } from 'lucide-react';
import { BRAND, SERVICES, AREAS, FAQ_GENERAL, servicePath, type Service } from '@/lib/brand';
import { GUIDES, guidePath, type Guide } from '@/lib/content';
import { abs, CONTENT_UPDATED, CONTENT_PUBLISHED } from '@/lib/site';
import { Breadcrumbs, CallButton, Eyebrow, Faq, JsonLd, LinkButton, PageHero, Section } from '@/components/site/ui';
import { Bolt } from '@/components/site/logo';

const ICONS = [Zap, Building2, House, Warehouse, Package];
const ORG = { '@id': `${abs('/')}#organization` };
const Tick = ({ dark }: { dark?: boolean }) => <Check className={`mt-1 h-5 w-5 shrink-0 ${dark ? 'text-volt' : 'text-brand'}`} strokeWidth={3} aria-hidden="true" />;
const H2 = 'font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl';
const H3 = 'font-display text-2xl font-bold tracking-tight sm:text-3xl';
const card = 'group flex flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl';
const areaServed = AREAS.map((a) => ({ '@type': 'City', name: `${a.name}, NV` }));

function Head({ eyebrow, title, lead, dark }: { eyebrow: string; title: string; lead?: string; dark?: boolean }) {
  return <div className="max-w-3xl"><Eyebrow dark={dark}>{eyebrow}</Eyebrow><h2 className={`mt-3 ${H2}`}>{title}</h2>{lead && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-slate'}`}>{lead}</p>}</div>;
}

function ServiceCards({ list = SERVICES }: { list?: Service[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => { const Icon = ICONS[SERVICES.indexOf(s)] ?? Zap; return (
        <article key={s.slug} className={card}>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-volt text-navy"><Icon className="h-6 w-6" aria-hidden="true" /></span>
          <h3 className="mt-5 font-display text-xl font-bold leading-snug">{s.title}</h3>
          <p className="mt-2 flex-1 text-slate">{s.blurb}</p>
          <Link href={servicePath(s.slug)} className="mt-5 inline-flex items-center gap-1.5 font-display font-semibold text-brand group-hover:gap-2.5">{s.short} with {BRAND.short}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </article>); })}
    </div>
  );
}
function GuideCards({ list = GUIDES }: { list?: Guide[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((g) => (
        <Link key={g.slug} href={guidePath(g.slug)} className={card}>
          <BookOpen className="h-6 w-6 text-brand" aria-hidden="true" />
          <h3 className="mt-4 font-display text-xl font-bold leading-snug">{g.title}</h3>
          <p className="mt-2 flex-1 text-slate">{g.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">Read the guide<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
        </Link>
      ))}
    </div>
  );
}
function Steps({ steps, dark = true }: { steps: string[]; dark?: boolean }) {
  return <ol className="mt-10 grid gap-5 md:grid-cols-4">{steps.map((s, i) => <li key={s} className={`relative rounded-3xl p-6 ${dark ? 'glass' : 'border border-line bg-white'}`}><span className="font-display text-5xl font-bold text-volt">0{i + 1}</span><p className={`mt-3 ${dark ? 'text-white/85' : 'text-slate'}`}>{s}</p></li>)}</ol>;
}
function BulletList({ items, dark }: { items: string[]; dark?: boolean }) {
  return <ul className="mt-5 space-y-3">{items.map((p) => <li key={p} className="flex gap-3"><Tick dark={dark} /><span className={dark ? 'text-white/85' : 'text-slate'}>{p}</span></li>)}</ul>;
}

export function CtaBand({ title = 'Need a charge in Dallas?' }: { title?: string }) {
  return (
    <section className="hero-bg relative overflow-hidden px-5 py-20 text-center text-white">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">Call {BRAND.short} and describe your vehicle and location. Staff confirm coverage and next steps before any visit.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><CallButton dark cta="band" /><LinkButton href="/contact/" dark>Email {BRAND.short}</LinkButton></div>
      </div>
    </section>
  );
}

const TRUST = [{ I: Clock, t: 'Around-the-clock coverage', d: 'Emergency charging through a national network' }, { I: ShieldCheck, t: 'Quote before work', d: 'Written, no surprise pricing' }, { I: Wrench, t: 'Experienced team', d: 'Fleets in 30+ states since 2020' }];
const STATS = [['30+', 'states served'], ['300+', 'counties served'], [String(BRAND.founded), 'year founded'], ['24/7', 'emergency coverage']];
const MARKET_STATS = [
  { value: '532,282', label: 'EVs registered in Texas in October 2026, up from 456,667 in February (TxDOT)' },
  { value: '1,500', label: 'public and shared charging ports the City of Dallas aims to add by 2030, many at apartment complexes (Dallas Morning News)' },
  { value: '85.7M', label: 'passengers through DFW Airport in 2025, second busiest in North America (Airports Council International)' },
  { value: '100', label: 'new public charging ports planned across a 16-county North Texas region with a $15 million federal grant (NCTCOG)' },
] as const;

const PAINS = [
  ['Apartment parking', 'Many Dallas-area residents live in apartments where a charger may not exist or may be taken, so a low battery has nowhere to go.'],
  ['Long suburban distances', 'Drivers cross Plano, Frisco, Fort Worth and Arlington in one day, and a low battery can strand a car far from a free station.'],
  ['Ice storm outages', 'Freezing weather can cut range and send drivers to crowded stations, and some stations lose power.'],
  ['Parked rideshare and delivery cars', 'A driver with a low battery is not earning, and a station detour costs a fare or a delivery window.'],
  ['Slow installs', 'Permanent chargers need permits, power review and construction, so a fleet can wait months for its own site.'],
] as const;
const CONDITIONS = [
  ['Winter storms', 'Fill the battery before freezing weather and expect longer lines at working stations.'],
  ['Airport and corporate traffic', 'DFW Airport handled about 85.7 million passengers in 2025, and corporate campuses in Plano, Irving and Frisco add steady daily driving.'],
  ['Summer heat', 'Hot afternoons raise cooling load and trim range, so trips get tighter than they look.'],
  ['Spread-out metro', 'Dallas, Fort Worth and the suburbs between them cover a large area, so a station is rarely just around the corner.'],
] as const;

export function HomePage() {
  return (
    <>
      <header className="hero-bg relative overflow-hidden px-5 pb-20 pt-12 text-white sm:pb-28 sm:pt-20">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="sun pointer-events-none absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_0.85fr]">
          <div>
            <Eyebrow dark>Dallas mobile EV charging</Eyebrow>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">A full charge, <span className="grad-text">delivered across Dallas</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">EV Mobile Charging Dallas brings a DC fast charger to the vehicle across the Dallas-Fort Worth area, for drivers, fleets and businesses, whether the battery is low on I-35E or in an apartment garage.</p>
            <div className="mt-9 flex flex-wrap gap-3"><CallButton dark cta="hero" /><LinkButton href="/services/" dark>See {BRAND.short} services</LinkButton></div>
          </div>
          <aside className="glass rounded-3xl p-7" aria-label="How a request works">
            <p className="font-display text-2xl font-bold text-volt">Low battery right now?</p>
            <ol className="mt-5 space-y-4 text-[15px] text-white/85">
              {['Call and share your location and vehicle', 'Staff confirm coverage and details by phone', 'A technician brings the charger to you', 'Drive away with enough charge'].map((s, i) => <li key={s} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-volt font-display text-sm font-bold text-navy">{i + 1}</span><span className="pt-0.5">{s}</span></li>)}
            </ol>
            <dl className="mt-7 grid grid-cols-2 gap-3 border-t border-white/15 pt-6">
              {STATS.map(([n, l]) => <div key={l}><dt className="font-display text-2xl font-bold text-volt">{n}</dt><dd className="mt-0.5 text-xs uppercase tracking-wider text-white/70">{l}</dd></div>)}
            </dl>
          </aside>
        </div>
      </header>
      <section className="border-b border-line bg-white px-5 py-7"><div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-3">{TRUST.map(({ I, t, d }) => <div key={t} className="flex items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-brand"><I className="h-5 w-5" aria-hidden="true" /></span><p><span className="block font-display font-bold leading-tight">{t}</span><span className="text-sm text-slate">{d}</span></p></div>)}</div></section>
      <Section>
        <Head eyebrow="Services" title="Mobile EV charging services in Dallas" lead={`${SERVICES.length} services cover emergency charging, fleets, permanent installation and charging equipment.`} />
        <div className="mt-10"><ServiceCards /></div>
      </Section>
      <Section className="bg-white">
        <Head eyebrow="Fleet and driver problems" title="Where Dallas drivers and fleets lose time" lead="Five common problems that a charger delivered to the vehicle helps solve." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{PAINS.map(([h, d]) => <div key={h} className="rounded-2xl border border-line bg-mist p-6"><h3 className="font-display text-lg font-bold">{h}</h3><p className="mt-2 text-[15px] leading-relaxed text-slate">{d}</p></div>)}</div>
        <div className="mt-8"><CallButton cta="pains" /></div>
      </Section>
      <Section dark>
        <Head dark eyebrow="How it works" title="From call to charge in four steps" lead="Staff confirm every detail by phone before a visit is scheduled." />
        <Steps steps={SERVICES[0].steps} />
        <div className="mt-10"><CallButton dark cta="how-it-works" /></div>
      </Section>
      <Section className="bg-white">
        <Head eyebrow="Market snapshot" title="What the public data says about EVs in Dallas" lead="Sourced figures on registrations, charging supply, visitors and heat. Every number links to its source on the market page." />
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{MARKET_STATS.map((m) => <div key={m.label} className="rounded-2xl border border-line bg-mist p-6"><dt className="font-display text-4xl font-bold text-brand">{m.value}</dt><dd className="mt-2 text-[15px] leading-relaxed text-slate">{m.label}</dd></div>)}</dl>
        <div className="mt-8 flex flex-wrap gap-3"><LinkButton href="/dallas-ev-data/">Read the Dallas EV data page</LinkButton><LinkButton href="/service-area/">Where we serve</LinkButton></div>
      </Section>
      <Section dark>
        <Head dark eyebrow="Dallas conditions" title="Built for the way Dallas drives" lead="Ice storms, heat and long suburban distances shape how EVs get used here." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{CONDITIONS.map(([h, d]) => <div key={h} className="glass rounded-2xl p-6"><h3 className="font-display text-lg font-bold text-volt">{h}</h3><p className="mt-2 text-[15px] leading-relaxed text-white/80">{d}</p></div>)}</div>
        <div className="mt-8"><LinkButton href="/resources/winter-storm-ev-charging-dallas/" dark>Read the winter storm guide</LinkButton></div>
      </Section>
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div><Head eyebrow="Why call us" title="Why Dallas drivers call us" lead="We bring the charger to you, so there is no tow, no station detour and no waiting in a line." /><div className="mt-8"><CallButton cta="why" /></div></div>
          <BulletList items={['Charging comes to the vehicle at the curb, garage or lot', 'DC fast charging equipment built for mobile service', 'Quote-based service, with staff confirming details by phone', 'Support for fleets and property managers', 'A team operating since 2020 in 30+ states']} />
        </div>
      </Section>
      <Section className="bg-white">
        <Head eyebrow="Resources" title="EV charging guides for Dallas drivers" lead="Plain answers on charging levels, range, storms and installation." />
        <div className="mt-10"><GuideCards list={GUIDES.slice(0, 6)} /></div>
        <div className="mt-8"><LinkButton href="/resources/">All EV charging guides</LinkButton></div>
      </Section>
      <Section dark>
        <Head dark eyebrow="FAQ" title="Dallas mobile EV charging questions" />
        <div className="mt-8 max-w-3xl"><Faq dark items={FAQ_GENERAL.slice(0, 6)} /></div>
      </Section>
      <CtaBand />
    </>
  );
}

export function ServicesHub() {
  return (
    <>
      <PageHero eyebrow="Services" crumbs={[{ label: 'Services' }]} h1="Mobile EV charging services in Dallas" lead={`${BRAND.name} offers ${SERVICES.length} services across the Dallas-Fort Worth area, from emergency charging and fleet programs to charger installation and equipment.`}><CallButton dark cta="hero" /></PageHero>
      <Section><ServiceCards /></Section>
      <CtaBand />
    </>
  );
}

export function ServicePage({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  return (
    <>
      <PageHero eyebrow={service.short} crumbs={[{ label: 'Services', href: '/services/' }, { label: service.title }]} h1={`${service.title} in Dallas`} lead={service.lead}><CallButton dark cta="hero" /></PageHero>
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div><h2 className={H3}>What you get</h2><BulletList items={service.points} /></div>
          <div><h2 className={H3}>Who it is for</h2><BulletList items={service.who} /></div>
        </div>
      </Section>
      <Section dark><Head dark eyebrow="Process" title="How it works" /><Steps steps={service.steps} /><div className="mt-10"><CallButton dark cta="service-steps" /></div></Section>
      <Section className="bg-white"><Head eyebrow="FAQ" title={`${service.title} questions`} /><div className="mt-8 max-w-3xl"><Faq items={service.faq} /></div></Section>
      <Section className="bg-white"><h2 className={H3}>Related guides</h2><div className="mt-6"><GuideCards list={GUIDES.slice(0, 3)} /></div></Section>
      <Section>
        <h2 className={H3}>Where we offer {service.short.toLowerCase()}</h2><p className="mt-3 max-w-2xl text-slate">Across the Dallas region. Staff confirm coverage for each address by phone. <Link href="/service-area/" className="font-semibold text-brand underline">See where we serve</Link>.</p>
        <h2 className={`mt-14 ${H3}`}>More services in Dallas</h2><div className="mt-6"><ServiceCards list={others.slice(0, 3)} /></div>
      </Section>
      <CtaBand />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: `${service.title} in Dallas`, description: service.blurb, provider: ORG, areaServed, url: abs(servicePath(service.slug)) }} />
    </>
  );
}

const MARKET_SOURCES = [
  { label: 'TxDOT: TxDOT expands electric vehicle charging network (Oct. 15, 2026)', url: 'https://www.txdot.gov/about/newsroom/stories/txdot-expands-electric-vehicle-charging-network.html' },
  { label: 'Axios Dallas: State of EVs in Texas (Aug. 2024)', url: 'https://www.axios.com/local/dallas/2024/08/06/state-of-evs-in-texas' },
  { label: 'U.S. Department of Energy: Dallas and DFW Clean Cities plan for EV charging access', url: 'https://afdc.energy.gov/case/3117' },
  { label: 'Dallas Morning News: What the future of EV charging looks like in Texas (Aug. 2024)', url: 'https://dallasnews.com/business/autos/2024/08/09/heres-what-the-future-of-ev-charging-looks-like-in-texas' },
  { label: 'DFW Clean Cities: Electric vehicles in North Texas', url: 'https://dfwcleancities.nctcog.org/alternative-fuels-in-dfw/electric' },
  { label: 'Airport Improvement: Airports Council International 2025 North American airport traffic rankings', url: 'https://airportimprovement.com/article/airports-council-releases-2025-north-american-airport-traffic-rankings/' },
  { label: 'NBC DFW (AP): Frigid temps can cut EV range and make charging tough', url: 'https://www.nbcdfw.com/news/national-international/frigid-temps-can-cut-electric-vehicle-range-make-charging-tough-heres-what-to-know/3437800/' },
  { label: 'PlugShare Research: Texas power blackouts did not stop most EV drivers (March 2021)', url: 'https://recargo.com/texas-power-blackouts.html' },
] as const;

export function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Service area" crumbs={[{ label: 'Service area' }]} h1="Where mobile EV charging is available in Dallas-Fort Worth" lead={`${BRAND.name} takes requests across the Dallas-Fort Worth area. Staff confirm coverage for each address by phone before a visit is scheduled.`}><CallButton dark cta="hero" /></PageHero>
      <Section>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate">
          <p>The service area is the Dallas-Fort Worth area, including Dallas, Fort Worth, Plano, Irving, Arlington, Frisco, Garland, McKinney, Richardson and Denton.</p>
          <p>Coverage depends on the exact address and the time of the request, so a request is not a confirmed dispatch. Call {BRAND.phone} with the address or cross street, the vehicle make and model and the charge level left, and staff confirm what is possible.</p>
          <p>Apartment garages, corporate campus lots, hotel lots near DFW Airport and street parking each work differently, so staff ask about parking access and any property rules before scheduling.</p>
          <p>During an ice storm or widespread power outage, roads and availability can change quickly. Call early and expect staff to confirm conditions first.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3"><LinkButton href="/dallas-ev-data/">See the Dallas EV data</LinkButton><LinkButton href="/resources/winter-storm-ev-charging-dallas/">Winter storm guide</LinkButton></div>
      </Section>
      <CtaBand />
    </>
  );
}

export function MarketPage() {
  const P = 'mt-4 text-lg leading-relaxed text-slate';
  return (
    <>
      <PageHero eyebrow="Dallas EV data" crumbs={[{ label: 'Dallas EV data' }]} h1="Dallas EV data: registrations, charging and winter storms" lead="Public figures on Texas EV registrations, Dallas charging plans, North Texas grants, DFW Airport traffic and cold-weather charging, each linked to its source. Gathered on November 24, 2026."><CallButton dark cta="hero" /></PageHero>
      <Section>
        <article className="max-w-3xl">
          <h2 className={H3}>EV registrations</h2>
          <p className={P}>TxDOT reported in October 2026 that 532,282 electric vehicles were registered in Texas, up from 456,667 in February. These are statewide figures, not Dallas-Fort Worth counts. DFW Clean Cities publishes regional registration maps and downloadable data for North Texas.</p>
          <h2 className={`mt-12 ${H3}`}>Public charging</h2>
          <p className={P}>Axios Dallas reported in August 2024 that Texas had about 3,731 charging locations with 10,253 charging ports, most in urban areas, and an average public charging price of 51 cents per kilowatt-hour. The Department of Energy case study describes a Dallas plan to install 1,500 charging ports to support 39,000 vehicles by 2030, with a focus on apartment residents. The North Central Texas Council of Governments won a $15 million federal grant for up to 100 public ports across 16 counties. Counts change often, so check afdc.energy.gov for the current number.</p>
          <h2 className={`mt-12 ${H3}`}>Airport and corporate traffic</h2>
          <p className={P}>DFW Airport served 85.7 million passengers in 2025, second in North America behind Atlanta, according to Airports Council International rankings reported by Airport Improvement. Airport hotels, rental lots and rideshare queues around Irving and Grapevine add EV demand on top of daily commuting.</p>
          <h2 className={`mt-12 ${H3}`}>Winter storms</h2>
          <p className={P}>Our <Link href="/resources/winter-storm-ev-charging-dallas/" className="font-semibold text-brand underline">winter storm guide</Link> collects reported guidance on cold-weather range, long lines at stations and charging before a freeze.</p>
          <h2 className={`mt-12 ${H3}`}>Our reading of the data</h2>
          <p className={P}>This section is our interpretation, not a statistic. Texas registrations keep rising, while Dallas&apos;s own plan says many residents live in apartments without a charger. Those are the situations where a charger that comes to the car can help: a low battery far from a free station, a car parked in a building without charging, or a fleet vehicle that cannot wait.</p>
          <h2 className={`mt-12 ${H3}`}>What we do not publish</h2>
          <p className={P}>Public sources do not give reliable neighborhood-level charger counts or response times for any service. We do not publish figures we cannot source.</p>
          <h2 className={`mt-12 ${H3}`}>Sources</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate">{MARKET_SOURCES.map((x) => <li key={x.url}><a href={x.url} rel="noopener noreferrer" target="_blank" className="font-medium text-brand underline">{x.label}</a></li>)}</ul>
        </article>
      </Section>
      <CtaBand />
    </>
  );
}

export function ResourcesHub() {
  return (
    <>
      <PageHero eyebrow="Resources" crumbs={[{ label: 'Resources' }]} h1="EV charging guides and resources" lead={`${GUIDES.length} plain guides on charging levels, charging time, winter range, road trips, home installs and fleet planning.`}><CallButton dark cta="hero" /></PageHero>
      <Section><GuideCards /></Section>
      <CtaBand />
    </>
  );
}

const idFor = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const fmtDate = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export function GuidePage({ guide }: { guide: Guide }) {
  const more = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const words = guide.sections.reduce((n, s) => n + s.p.join(' ').split(/\s+/).length, guide.lead.split(/\s+/).length);
  return (
    <>
      <PageHero eyebrow="Guide" crumbs={[{ label: 'Resources', href: '/resources/' }, { label: guide.short }]} h1={guide.title} lead={guide.lead}><CallButton dark cta="hero" /></PageHero>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <article className="max-w-3xl">
            <p className="text-sm text-slate">By {BRAND.name} &middot; Updated <time dateTime={CONTENT_UPDATED}>{fmtDate(CONTENT_UPDATED)}</time> &middot; {Math.max(1, Math.round(words / 200))} min read</p>
            <nav aria-label="In this guide" className="mt-6 rounded-2xl border border-line bg-white p-5">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand">In this guide</p>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5">{guide.sections.map((s) => <li key={s.h}><a href={`#${idFor(s.h)}`} className="font-medium hover:text-brand">{s.h}</a></li>)}<li><a href="#quick-answers" className="font-medium hover:text-brand">Quick answers</a></li></ol>
            </nav>
            <div className="mt-10">{guide.sections.map((s) => <div key={s.h} className="mb-10 scroll-mt-28" id={idFor(s.h)}><h2 className={H3}>{s.h}</h2>{s.p.map((t) => <p key={t} className="mt-4 text-lg leading-relaxed text-slate">{t}</p>)}</div>)}</div>
          {guide.sources && <div className="mt-4"><h2 className={H3}>Sources</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-slate">{guide.sources.map((x) => <li key={x.url}><a href={x.url} rel="noopener noreferrer" target="_blank" className="font-medium text-brand underline">{x.label}</a></li>)}</ul></div>}</article>
          <aside className="h-fit rounded-3xl bg-navy p-6 text-white lg:sticky lg:top-28"><RouteIcon className="h-6 w-6 text-volt" aria-hidden="true" /><p className="mt-3 font-display text-xl font-bold">Need charge now?</p><p className="mt-2 text-sm text-white/75">Staff confirm your location, vehicle and coverage by phone.</p><div className="mt-5"><CallButton dark cta="guide-aside" label={`Call ${BRAND.phone}`} className="w-full" /></div></aside>
        </div>
      </Section>
      <Section className="bg-white" id="quick-answers"><Head eyebrow="FAQ" title="Quick answers" /><div className="mt-8 max-w-3xl"><Faq items={guide.faq} /></div></Section>
      <Section><h2 className={H3}>More guides</h2><div className="mt-6"><GuideCards list={more} /></div><h2 className={`mt-14 ${H3}`}>Services and coverage</h2><div className="mt-6"><ServiceCards list={SERVICES.slice(0, 3)} /></div></Section>
      <CtaBand />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.description, author: ORG, publisher: ORG, datePublished: CONTENT_PUBLISHED, dateModified: CONTENT_UPDATED, wordCount: words, image: abs('/images/og-default.jpg'), mainEntityOfPage: abs(guidePath(guide.slug)) }} />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" crumbs={[{ label: 'About' }]} h1={`About ${BRAND.name}`} lead="We are a mobile EV charging team serving Dallas, backed by a national operation running since 2020."><CallButton dark cta="hero" /></PageHero>
      <Section>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate">
          <p>Our team builds mobile DC fast charging into a service that reaches electric vehicles wherever they are. The operation runs in more than 30 states and 300 counties, supporting individual drivers, fleets and businesses.</p>
          <p>The team operates from {BRAND.street}, {BRAND.locality}, and serves Dallas. The goal is simple: remove range anxiety so EV owners and operators keep moving.</p>
          <p>We also install Level 2 and Level 3 chargers and supply charging equipment and startup kits.</p>
        </div>
      </Section>
      <Section dark><Head dark eyebrow="By the numbers" title="Built to keep EVs moving" /><dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">{STATS.map(([n, l]) => <div key={l} className="glass rounded-2xl p-5"><dt className="font-display text-4xl font-bold text-volt">{n}</dt><dd className="mt-1 text-sm text-white/70">{l}</dd></div>)}</dl></Section>
      <CtaBand />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" crumbs={[{ label: 'Contact' }]} h1={`Contact ${BRAND.name}`} lead="Call or email to request mobile EV charging, a fleet quote or a charger installation review in Dallas."><CallButton dark cta="hero" /></PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className={card}><Phone className="h-6 w-6 text-brand" aria-hidden="true" /><h2 className="mt-3 font-display text-2xl font-bold">Phone</h2><a className="mt-2 block text-lg font-semibold underline" href={BRAND.phoneHref} data-cta="contact">{BRAND.phone}</a></div>
          <div className={card}><Mail className="h-6 w-6 text-brand" aria-hidden="true" /><h2 className="mt-3 font-display text-2xl font-bold">Email</h2><a className="mt-2 block break-all text-lg font-semibold underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
          <div className={card}><MapPin className="h-6 w-6 text-brand" aria-hidden="true" /><h2 className="mt-3 font-display text-2xl font-bold">Office</h2><address className="mt-2 text-lg not-italic">{BRAND.street}<br />{BRAND.locality}, {BRAND.region} {BRAND.zip}</address></div>
        </div>
        <p className="mt-8 max-w-2xl text-slate">A message or call is a request, not a confirmed dispatch. Staff confirm your location, vehicle and coverage before any visit.</p>
      </Section>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ContactPage', url: abs('/contact/'), about: ORG }} />
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" crumbs={[{ label: 'FAQ' }]} h1="Mobile EV charging FAQ for Dallas" lead="Answers about mobile charging, fleet programs, coverage and charger installation across the Dallas-Fort Worth area."><CallButton dark cta="hero" /></PageHero>
      <Section><div className="max-w-3xl"><Faq items={FAQ_GENERAL} /></div></Section>
      <CtaBand />
    </>
  );
}

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const isP = kind === 'privacy';
  return (
    <>
      <PageHero crumbs={[{ label: isP ? 'Privacy' : 'Terms' }]} h1={isP ? 'Privacy notice' : 'Terms of service'} lead="Draft for owner and legal review." />
      <Section><div className="max-w-3xl space-y-4 text-slate">
        {isP ? (<>
          <p>This website is operated by {BRAND.legalEntity}. It does not use a contact form. If you call or email us, the information you share is used only to respond to your request.</p>
          <p>The site uses analytics (Google Analytics, Google Tag Manager, Microsoft Clarity and an internal call and click counter). These tools honor the Global Privacy Control signal where supported.</p>
          <p>Questions: <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.</p></>) : (<>
          <p>This website is operated by {BRAND.legalEntity}. Information on this site describes EV charging services in Dallas. A call or message is a request, not a confirmed dispatch.</p>
          <p>Services are quote-based. Staff confirm availability, coverage and pricing before work begins.</p>
          <p>Questions: <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.</p></>)}
      </div></Section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <Section><Breadcrumbs items={[{ label: 'Page not found' }]} />
      <h1 className="mt-6 font-display text-5xl font-bold">Page not found</h1>
      <p className="mt-3 text-lg text-slate">That page does not exist. Try the {BRAND.name} home page or call us.</p>
      <div className="mt-6 flex flex-wrap gap-3"><LinkButton href="/">{BRAND.short} home</LinkButton><CallButton /></div>
    </Section>
  );
}
