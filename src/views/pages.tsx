import { Link } from '@/lib/router';
import { Check, Zap, Building2, House, Warehouse, Package, GraduationCap, Presentation, MapPin, Phone, Mail, ShieldCheck, Clock, Wrench } from 'lucide-react';
import { BRAND, SERVICES, AREAS, FAQ_GENERAL, servicePath, areaPath, hoodPath, hoodFor, type Service, type Area, type Hood } from '@/lib/brand';
import { abs } from '@/lib/site';
import { Breadcrumbs, CallButton, Faq, JsonLd, LinkButton, PageHero, Section } from '@/components/site/ui';
import { Bolt } from '@/components/site/logo';

const ICONS = [Zap, Building2, House, Warehouse, Package];
const ORG = { '@id': `${abs('/')}#organization` };
const Tick = () => <Check className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={3} aria-hidden="true" />;
const H2 = 'font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl';

function ServiceCards({ list = SERVICES }: { list?: Service[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => { const Icon = ICONS[SERVICES.indexOf(s)] ?? Zap; return (
        <article key={s.slug} className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-ink text-gold"><Icon className="h-6 w-6" aria-hidden="true" /></span>
          <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight">{s.title}</h3>
          <p className="mt-2 flex-1 text-ink/75">{s.blurb}</p>
          <Link href={servicePath(s.slug)} className="mt-4 font-display text-lg font-bold uppercase underline decoration-gold decoration-4 underline-offset-4 hover:text-gold">{s.short} with {BRAND.short}</Link>
        </article>); })}
    </div>
  );
}

function AreaChips() {
  return <ul className="mt-6 flex flex-wrap gap-2">{AREAS.map((a) => <li key={a.slug}><Link href={areaPath(a.slug)} className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold hover:border-gold hover:bg-gold/10"><MapPin className="h-4 w-4 text-gold" aria-hidden="true" />{a.name}</Link></li>)}</ul>;
}

function Steps({ steps }: { steps: string[] }) {
  return <ol className="mt-8 grid gap-5 md:grid-cols-4">{steps.map((s, i) => <li key={s} className="rounded-xl border border-white/15 p-5"><span className="font-display text-5xl font-extrabold text-gold">{i + 1}</span><p className="mt-2 text-white/85">{s}</p></li>)}</ol>;
}

export function CtaBand({ title = 'Need a charge in Dallas?' }: { title?: string }) {
  return (
    <section className="hero-bg px-5 py-14 text-center text-white">
      <h2 className="font-display text-4xl font-extrabold uppercase sm:text-5xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-white/80">Call {BRAND.short} and describe your vehicle and location. Staff confirm coverage and next steps before any visit.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3"><CallButton dark cta="band" /><LinkButton href="/contact/" dark>Email {BRAND.short}</LinkButton></div>
    </section>
  );
}

const TRUST = [{ I: Clock, t: 'Around-the-clock coverage', d: 'Emergency charging through a national network' }, { I: ShieldCheck, t: 'Quote before work', d: 'Written, no surprise pricing' }, { I: Wrench, t: 'Experienced team', d: 'Fleets in 30+ states since 2020' }];

export function HomePage() {
  return (
    <>
      <header className="hero-bg relative overflow-hidden px-5 pb-16 pt-12 text-white sm:pb-24 sm:pt-20">
        <Bolt className="pointer-events-none absolute -right-10 top-4 h-[420px] w-[420px] text-gold/10" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-display text-lg font-bold uppercase tracking-[0.2em] text-gold">Dallas-Fort Worth, Texas</p>
          <h1 className="mt-3 max-w-3xl font-display text-6xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-7xl">Never get stranded with a dead battery</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">EV Mobile Charging Dallas delivers mobile EV charging in Dallas for drivers, fleets and businesses, bringing a DC fast charger to the vehicle anywhere in the Dallas-Fort Worth area.</p>
          <div className="mt-8 flex flex-wrap gap-3"><CallButton dark cta="hero" /><LinkButton href="/services/" dark>See {BRAND.short} services</LinkButton></div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {[['30+', 'states served'], ['300+', 'counties served'], [String(BRAND.founded), 'year founded']].map(([n, l]) => <div key={l}><dt className="font-display text-4xl font-extrabold text-gold">{n}</dt><dd className="text-xs uppercase tracking-wider text-white/70">{l}</dd></div>)}
          </dl>
        </div>
      </header>
      <section className="border-b border-ink/10 bg-white px-5 py-6"><div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">{TRUST.map(({ I, t, d }) => <div key={t} className="flex items-center gap-3"><I className="h-8 w-8 shrink-0 text-gold" aria-hidden="true" /><p><span className="block font-display text-xl font-bold uppercase leading-tight">{t}</span><span className="text-sm text-ink/70">{d}</span></p></div>)}</div></section>
      <Section>
        <h2 className={H2}>Mobile EV charging services in Dallas</h2>
        <p className="mt-3 max-w-2xl text-lg text-ink/75">{SERVICES.length} services cover emergency roadside charging, fleets, permanent installation and charging equipment.</p>
        <div className="mt-8"><ServiceCards /></div>
      </Section>
      <Section dark>
        <h2 className={H2}>How a charge call works</h2>
        <Steps steps={SERVICES[0].steps} />
        <div className="mt-8"><CallButton dark cta="how-it-works" /></div>
      </Section>
      <Section>
        <h2 className={H2}>Dallas-Fort Worth areas we serve</h2>
        <p className="mt-3 max-w-2xl text-ink/75">Pick your city for local details. Call to confirm coverage for your exact address.</p>
        <AreaChips />
      </Section>
      <Section className="bg-white">
        <div className="grid gap-10 md:grid-cols-2">
          <div><h2 className={H2}>Why Dallas drivers call us</h2><p className="mt-4 text-ink/75">We bring the charger to you, so there is no tow, no station detour and no waiting in a line.</p></div>
          <ul className="space-y-4">{['Charging comes to the vehicle at the curb, garage or lot', 'DC fast charging equipment built for mobile service', 'Quote-based service, with staff confirming details by phone', 'Support for fleets and property managers', 'A team operating since 2020 in 30+ states'].map((t) => <li key={t} className="flex gap-3"><Tick /><span className="text-lg">{t}</span></li>)}</ul>
        </div>
      </Section>
      <Section>
        <h2 className={H2}>Dallas mobile EV charging questions</h2>
        <div className="mt-8 max-w-3xl"><Faq items={FAQ_GENERAL.slice(0, 5)} /></div>
      </Section>
      <CtaBand />
    </>
  );
}

export function ServicesHub() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Services' }]} h1="Mobile EV charging services in Dallas" lead={`${BRAND.name} offers ${SERVICES.length} services in the Dallas-Fort Worth area, from emergency charging and fleet programs to charger installation and equipment.`}><CallButton dark cta="hero" /></PageHero>
      <Section><ServiceCards /></Section>
      <CtaBand />
    </>
  );
}

export function ServicePage({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  return (
    <>
      <PageHero crumbs={[{ label: 'Services', href: '/services/' }, { label: service.title }]} h1={`${service.title} in Dallas`} lead={service.lead}><CallButton dark cta="hero" /></PageHero>
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div><h2 className="font-display text-3xl font-extrabold uppercase">What you get</h2><ul className="mt-4 space-y-3">{service.points.map((p) => <li key={p} className="flex gap-3"><Tick /><span>{p}</span></li>)}</ul></div>
          <div><h2 className="font-display text-3xl font-extrabold uppercase">Who it is for</h2><ul className="mt-4 space-y-3">{service.who.map((p) => <li key={p} className="flex gap-3"><Tick /><span>{p}</span></li>)}</ul></div>
        </div>
      </Section>
      <Section dark><h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">How it works</h2><Steps steps={service.steps} /><div className="mt-8"><CallButton dark cta="service-steps" /></div></Section>
      <Section className="bg-white"><h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">{service.title} questions</h2><div className="mt-6 max-w-3xl"><Faq items={service.faq} /></div></Section>
      <Section><h2 className="font-display text-3xl font-extrabold uppercase">Where we offer {service.short.toLowerCase()}</h2><AreaChips /><h2 className="mt-12 font-display text-3xl font-extrabold uppercase">More services in Dallas</h2><div className="mt-6"><ServiceCards list={others.slice(0, 3)} /></div></Section>
      <CtaBand />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: `${service.title} in Dallas`, description: service.blurb, provider: ORG, areaServed: AREAS.map((a) => ({ '@type': 'City', name: `${a.name}, TX` })), url: abs(servicePath(service.slug)) }} />
    </>
  );
}

export function LocationsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Service areas' }]} h1="Mobile EV charging service areas in Dallas-Fort Worth" lead={`${BRAND.name} serves ${AREAS.length} Dallas-Fort Worth communities. Choose your city, then call to confirm coverage for your exact address.`}><CallButton dark cta="hero" /></PageHero>
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{AREAS.map((a) => <li key={a.slug}><Link href={areaPath(a.slug)} className="block h-full rounded-xl border border-ink/10 bg-white p-5 transition hover:border-gold hover:shadow-lg"><span className="flex items-center gap-2 font-display text-3xl font-bold uppercase"><MapPin className="h-5 w-5 text-gold" aria-hidden="true" />{a.name}, TX</span><span className="mt-2 block text-sm text-ink/70">{a.hoods.slice(0, 4).join(', ')}</span></Link></li>)}</ul>
        <p className="mt-8 max-w-2xl text-ink/75">Not on the list? Call anyway. Our team operates in more than 30 states and 300 counties, and staff confirm Dallas-Fort Worth coverage address by address.</p>
      </Section>
      <CtaBand />
    </>
  );
}

export function AreaPage({ area }: { area: Area }) {
  return (
    <>
      <PageHero crumbs={[{ label: 'Service areas', href: '/locations/' }, { label: area.name }]} h1={`Mobile EV charging in ${area.name}, TX`} lead={area.intro}><CallButton dark cta="hero" /><LinkButton href="/contact/" dark>Email {BRAND.short}</LinkButton></PageHero>
      <Section>
        <h2 className={H2}>EV charging services in {area.name}</h2>
        <div className="mt-8"><ServiceCards /></div>
      </Section>
      <Section dark>
        <div className="grid gap-10 md:grid-cols-2">
          <div><h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">Common calls in {area.name}</h2><ul className="mt-5 space-y-3">{area.scenarios.map((s) => <li key={s} className="flex gap-3"><Tick /><span className="text-lg">{s}</span></li>)}</ul></div>
          <div><h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">Neighborhoods near {area.name}</h2><ul className="mt-5 flex flex-wrap gap-2">{area.hoods.map((h) => { const hd = hoodFor(area.slug, h); return <li key={h}>{hd ? <Link href={hoodPath(hd)} className="inline-block rounded-full border border-gold/60 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold hover:text-ink">{h}</Link> : <span className="inline-block rounded-full border border-white/25 px-4 py-2 text-sm font-semibold">{h}</span>}</li>; })}</ul><p className="mt-5 text-white/70">Call to confirm coverage for your exact address.</p></div>
        </div>
        <div className="mt-10"><CallButton dark cta="area-mid" /></div>
      </Section>
      <Section className="bg-white"><h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">{area.name} EV charging questions</h2><div className="mt-6 max-w-3xl"><Faq items={[area.faq, FAQ_GENERAL[1], FAQ_GENERAL[4]]} /></div></Section>
      <Section><h2 className="font-display text-3xl font-extrabold uppercase">Other Dallas-Fort Worth areas</h2><AreaChips /></Section>
      <CtaBand title={`Need a charge in ${area.name}?`} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: `Mobile EV charging in ${area.name}, TX`, description: area.intro, provider: ORG, areaServed: { '@type': 'City', name: `${area.name}, TX` }, url: abs(areaPath(area.slug)) }} />
    </>
  );
}

export function HoodPage({ hood }: { hood: Hood }) {
  const a = hood.area;
  const sibs = a.hoods.map((n) => hoodFor(a.slug, n)).filter((x): x is Hood => !!x && x.slug !== hood.slug);
  const faq = [
    { q: `Do you offer mobile EV charging in ${hood.name}?`, a: `Yes. We serve ${hood.name} and the rest of ${a.name}. Call ${BRAND.phone} to confirm coverage for your exact address.` },
    { q: `What EV charging services are available in ${hood.name}?`, a: `We offer emergency mobile EV charging, fleet and business charging, home and commercial charger installation, and charging equipment in ${hood.name}.` },
    FAQ_GENERAL[4],
  ];
  return (
    <>
      <PageHero crumbs={[{ label: 'Service areas', href: '/locations/' }, { label: a.name, href: areaPath(a.slug) }, { label: hood.name }]} h1={`Mobile EV charging in ${hood.name}, ${a.name}`} lead={`${BRAND.name} brings mobile EV charging to ${hood.name}, ${hood.note}. A technician delivers a DC fast charger to your vehicle.`}><CallButton dark cta="hero" /><LinkButton href="/contact/" dark>Email {BRAND.short}</LinkButton></PageHero>
      <Section>
        <h2 className={H2}>EV charging services in {hood.name}</h2>
        <div className="mt-8"><ServiceCards /></div>
      </Section>
      <Section dark>
        <div className="grid gap-10 md:grid-cols-2">
          <div><h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">Typical calls near {hood.name}</h2><ul className="mt-5 space-y-3">{a.scenarios.map((x) => <li key={x} className="flex gap-3"><Tick /><span className="text-lg">{x}</span></li>)}</ul></div>
          <div><h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">How to request a charge</h2><ol className="mt-5 space-y-3 text-lg">{SERVICES[0].steps.map((x, i) => <li key={x} className="flex gap-3"><span className="font-display text-2xl font-extrabold text-gold">{i + 1}</span><span>{x}</span></li>)}</ol></div>
        </div>
        <div className="mt-10"><CallButton dark cta="hood-mid" /></div>
      </Section>
      <Section className="bg-white"><h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">{hood.name} EV charging questions</h2><div className="mt-6 max-w-3xl"><Faq items={faq} /></div></Section>
      <Section>
        <h2 className="font-display text-3xl font-extrabold uppercase">More of {a.name}</h2>
        <ul className="mt-5 flex flex-wrap gap-2"><li><Link href={areaPath(a.slug)} className="inline-flex rounded-full bg-ink px-4 py-2 text-sm font-semibold text-gold">All of {a.name}</Link></li>{sibs.map((h) => <li key={h.slug}><Link href={hoodPath(h)} className="inline-flex rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold hover:border-gold">{h.name}</Link></li>)}</ul>
      </Section>
      <CtaBand title={`Need a charge in ${hood.name}?`} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: `Mobile EV charging in ${hood.name}, ${a.name}`, provider: ORG, areaServed: { '@type': 'Place', name: `${hood.name}, ${a.name}, TX` }, url: abs(hoodPath(hood)) }} />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'About' }]} h1={`About ${BRAND.name}`} lead="We are a mobile EV charging team serving the Dallas-Fort Worth area, backed by a national operation running since 2020."><CallButton dark cta="hero" /></PageHero>
      <Section>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/85">
          <p>Our team builds mobile DC fast charging into a service that reaches electric vehicles wherever they are. The operation runs in more than 30 states and 300 counties, supporting individual drivers, fleets and businesses.</p>
          <p>The team operates from {BRAND.street}, {BRAND.locality}, and serves the Dallas-Fort Worth area. The goal is simple: remove range anxiety so EV owners and operators keep moving.</p>
          <p>We also install Level 2 and Level 3 chargers and supply charging equipment and startup kits.</p>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Contact' }]} h1={`Contact ${BRAND.name}`} lead="Call or email to request mobile EV charging, a fleet quote or a charger installation review in Dallas-Fort Worth."><CallButton dark cta="hero" /></PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-ink/10 bg-white p-6"><Phone className="h-6 w-6 text-gold" aria-hidden="true" /><h2 className="mt-3 font-display text-2xl font-bold uppercase">Phone</h2><a className="mt-2 block text-lg font-semibold underline" href={BRAND.phoneHref} data-cta="contact">{BRAND.phone}</a></div>
          <div className="rounded-2xl border border-ink/10 bg-white p-6"><Mail className="h-6 w-6 text-gold" aria-hidden="true" /><h2 className="mt-3 font-display text-2xl font-bold uppercase">Email</h2><a className="mt-2 block break-all text-lg font-semibold underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
          <div className="rounded-2xl border border-ink/10 bg-white p-6"><MapPin className="h-6 w-6 text-gold" aria-hidden="true" /><h2 className="mt-3 font-display text-2xl font-bold uppercase">Office</h2><address className="mt-2 text-lg not-italic">{BRAND.street}<br />{BRAND.locality}, {BRAND.region} {BRAND.zip}</address></div>
        </div>
        <p className="mt-8 max-w-2xl text-ink/75">A message or call is a request, not a confirmed dispatch. Staff confirm your location, vehicle and coverage before any visit.</p>
      </Section>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ContactPage', url: abs('/contact/'), about: ORG }} />
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'FAQ' }]} h1="Mobile EV charging FAQ for Dallas" lead="Answers about mobile charging, fleet programs, coverage and charger installation across the Dallas-Fort Worth area."><CallButton dark cta="hero" /></PageHero>
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
      <Section><div className="max-w-3xl space-y-4 text-ink/85">
        {isP ? (<>
          <p>This website is operated by {BRAND.legalEntity}. It does not use a contact form. If you call or email us, the information you share is used only to respond to your request.</p>
          <p>The site uses analytics (Google Analytics, Google Tag Manager, Microsoft Clarity and an internal call and click counter). These tools honor the Global Privacy Control signal where supported.</p>
          <p>Questions: <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.</p></>) : (<>
          <p>This website is operated by {BRAND.legalEntity}. Information on this site describes EV charging services in the Dallas-Fort Worth area. A call or message is a request, not a confirmed dispatch.</p>
          <p>Services are quote-based. Staff confirm availability, coverage and pricing before work begins.</p>
          <p>Questions: <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.</p></>)}
      </div></Section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <Section><Breadcrumbs items={[{ label: 'Page not found' }]} />
      <h1 className="mt-6 font-display text-6xl font-extrabold uppercase">Page not found</h1>
      <p className="mt-3 text-lg text-ink/75">That page does not exist. Try the {BRAND.name} home page or call us.</p>
      <div className="mt-6 flex flex-wrap gap-3"><LinkButton href="/">{BRAND.short} home</LinkButton><CallButton /></div>
    </Section>
  );
}
