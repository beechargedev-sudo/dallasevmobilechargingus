import type { ReactNode } from 'react';
import { Link } from '@/lib/router';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { BRAND, SERVICES, servicePath } from '@/lib/brand';
import { GUIDES, guidePath } from '@/lib/content';
import { Logo } from './logo';

const TOP = [{ l: 'About', h: '/about/' }, { l: 'FAQ', h: '/faq/' }, { l: 'Contact', h: '/contact/' }];
const colH = 'font-display text-sm font-semibold uppercase tracking-[0.2em] text-volt';
const li = 'text-[15px] text-white/70 transition hover:text-volt';
const mi = 'block rounded-lg px-3 py-2 text-sm font-medium text-navy hover:bg-mist hover:text-brand';

function Menu({ label, href, children, wide }: { label: string; href: string; children: ReactNode; wide?: boolean }) {
  return (
    <div className="menu-group relative">
      <Link href={href} className="inline-flex items-center gap-1 py-5 text-sm font-medium text-white/85 hover:text-volt">{label}<ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /></Link>
      <div className={`menu-panel absolute left-1/2 top-full z-50 hidden -translate-x-1/2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-2xl ${wide ? 'w-[640px] grid-cols-2' : 'w-[340px] grid-cols-1'}`}>{children}</div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-volt focus:px-3 focus:py-2 focus:text-navy">Skip to content</a>
      <div className="bg-brand px-4 py-2 text-center text-[13px] font-medium text-white">Mobile EV charging across the Dallas-Fort Worth area. Call <a href={BRAND.phoneHref} data-cta="topbar" className="font-semibold underline">{BRAND.phone}</a></div>
      <div className="sticky top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="/" aria-label="EV Mobile Charging Dallas home" className="py-3"><Logo /></Link>
          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            <Menu label="Services" href="/services/">{SERVICES.map((s) => <Link key={s.slug} href={servicePath(s.slug)} className={mi}>{s.title}</Link>)}</Menu>
            <Link href="/service-area/" className="text-sm font-medium text-white/85 hover:text-volt">Service area</Link>
            <Link href="/dallas-ev-data/" className="text-sm font-medium text-white/85 hover:text-volt">Dallas data</Link>
            <Link href="/resources/" className="text-sm font-medium text-white/85 hover:text-volt">Resources</Link>
            {TOP.map((n) => <Link key={n.h} href={n.h} className="text-sm font-medium text-white/85 hover:text-volt">{n.l}</Link>)}
          </nav>
          <a href={BRAND.phoneHref} data-cta="header" className="inline-flex items-center gap-2 rounded-full bg-volt px-4 py-2.5 font-display text-sm font-semibold text-navy hover:bg-white"><Phone className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">{BRAND.phone}</span><span className="sm:hidden">Call</span></a>
        </div>
        <nav aria-label="Mobile" className="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-2.5 lg:hidden">
          {[{ l: 'Services', h: '/services/' }, { l: 'Service area', h: '/service-area/' }, { l: 'Market', h: '/dallas-ev-data/' }, { l: 'Resources', h: '/resources/' }, ...TOP].map((n) => <Link key={n.h} href={n.h} className="whitespace-nowrap text-xs font-semibold text-white/80">{n.l}</Link>)}
        </nav>
      </div>
      <main id="main">{children}</main>
      <footer className="relative bg-[#0b0d12] text-white/75">
        <div className="h-1 bg-gradient-to-r from-brand via-volt to-brand" />
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 md:pb-12">
          <div className="glass grid gap-8 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">Low battery in Dallas?</p>
              <p className="mt-2 text-white/70">Call now. Staff confirm your location and coverage before any visit.</p>
            </div>
            <a href={BRAND.phoneHref} data-cta="footer" className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-volt px-8 font-display text-xl font-bold text-navy hover:bg-white"><Phone className="h-5 w-5" aria-hidden="true" />{BRAND.phone}</a>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr]">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/65">Mobile EV charging, fleet programs and charger installation for drivers and businesses across the Dallas-Fort Worth area. Operating in 30+ states since {BRAND.founded}.</p>
              <address className="mt-5 space-y-3 text-[15px] not-italic">
                <p className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-volt" aria-hidden="true" /><span>{BRAND.street}<br />{BRAND.locality}, {BRAND.region} {BRAND.zip}</span></p>
                <p className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-volt" aria-hidden="true" /><a href={`mailto:${BRAND.email}`} className="break-all hover:text-volt">{BRAND.email}</a></p>
              </address>
            </div>
            <nav aria-label="Services"><h2 className={colH}>Services</h2><ul className="mt-4 space-y-2.5">{SERVICES.map((s) => <li key={s.slug}><Link href={servicePath(s.slug)} className={li}>{s.title}</Link></li>)}</ul></nav>
            <nav aria-label="Resources"><h2 className={colH}>Guides</h2><ul className="mt-4 space-y-2.5">{GUIDES.slice(0, 6).map((g) => <li key={g.slug}><Link href={guidePath(g.slug)} className={li}>{g.short}</Link></li>)}<li><Link href="/resources/" className={li}>All guides</Link></li></ul></nav>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
            <ul className="flex gap-5"><li><Link href="/about/" className="hover:text-volt">About</Link></li><li><Link href="/contact/" className="hover:text-volt">Contact</Link></li><li><Link href="/privacy/" className="hover:text-volt">Privacy</Link></li><li><Link href="/terms/" className="hover:text-volt">Terms</Link></li></ul>
          </div>
        </div>
      </footer>
      <a href={BRAND.phoneHref} data-cta="sticky" className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-volt py-3.5 font-display text-lg font-bold text-navy shadow-[0_-4px_20px_rgba(0,0,0,.35)] md:hidden"><Phone className="h-5 w-5" aria-hidden="true" /> Call {BRAND.short}: {BRAND.phone}</a>
    </>
  );
}
