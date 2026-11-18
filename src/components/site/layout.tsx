import type { ReactNode } from 'react';
import { Link } from '@/lib/router';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BRAND, SERVICES, AREAS, servicePath, areaPath } from '@/lib/brand';
import { Logo } from './logo';

const NAV = [{ l: 'Services', h: '/services/' }, { l: 'Service areas', h: '/locations/' }, { l: 'About', h: '/about/' }, { l: 'FAQ', h: '/faq/' }, { l: 'Contact', h: '/contact/' }];
const colH = 'font-display text-xl font-bold uppercase tracking-wider text-gold';
const li = 'text-[15px] text-white/70 transition hover:text-gold';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <div className="bg-gold px-4 py-1.5 text-center text-sm font-semibold text-ink">Mobile EV charging across Dallas-Fort Worth. Call <a href={BRAND.phoneHref} data-cta="topbar" className="underline">{BRAND.phone}</a></div>
      <div className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link href="/" aria-label="EV Mobile Charging Dallas home"><Logo /></Link>
          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => <Link key={n.h} href={n.h} className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-gold">{n.l}</Link>)}
          </nav>
          <a href={BRAND.phoneHref} data-cta="header" className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 font-display text-lg font-bold uppercase text-ink hover:bg-white"><Phone className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">{BRAND.phone}</span><span className="sm:hidden">Call</span></a>
        </div>
        <nav aria-label="Mobile" className="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-2 md:hidden">
          {NAV.map((n) => <Link key={n.h} href={n.h} className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-white/80">{n.l}</Link>)}
        </nav>
      </div>
      <main id="main">{children}</main>
      <footer className="relative bg-[#070708] text-white/75">
        <div className="h-1.5 bg-gradient-to-r from-gold via-amber-300 to-gold" />
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-14 md:pb-12">
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="font-display text-3xl font-extrabold uppercase leading-none text-white sm:text-4xl">Low battery in Dallas-Fort Worth?</p>
              <p className="mt-2 text-white/70">Call now. Staff confirm your location and coverage before any visit.</p>
            </div>
            <a href={BRAND.phoneHref} data-cta="footer" className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-gold px-7 font-display text-2xl font-extrabold uppercase text-ink hover:bg-white"><Phone className="h-6 w-6" aria-hidden="true" />{BRAND.phone}</a>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.4fr_0.8fr]">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/65">Mobile EV charging, fleet programs and charger installation for drivers and businesses across the Dallas-Fort Worth area. Operating in 30+ states since {BRAND.founded}.</p>
              <address className="mt-5 space-y-3 text-[15px] not-italic">
                <p className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" /><span>{BRAND.street}<br />{BRAND.locality}, {BRAND.region} {BRAND.zip}</span></p>
                <p className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" /><a href={`mailto:${BRAND.email}`} className="break-all hover:text-gold">{BRAND.email}</a></p>
              </address>
            </div>
            <nav aria-label="Services"><h2 className={colH}>Services</h2><ul className="mt-4 space-y-2.5">{SERVICES.map((s) => <li key={s.slug}><Link href={servicePath(s.slug)} className={li}>{s.title}</Link></li>)}</ul></nav>
            <nav aria-label="Service areas"><h2 className={colH}>Service areas</h2><ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">{AREAS.map((a) => <li key={a.slug}><Link href={areaPath(a.slug)} className={li}>{a.name}</Link></li>)}</ul></nav>
            <nav aria-label="Company"><h2 className={colH}>Company</h2><ul className="mt-4 space-y-2.5"><li><Link href="/about/" className={li}>About</Link></li><li><Link href="/faq/" className={li}>FAQ</Link></li><li><Link href="/contact/" className={li}>Contact</Link></li><li><Link href="/locations/" className={li}>All areas</Link></li></ul></nav>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
            <ul className="flex gap-5"><li><Link href="/privacy/" className="hover:text-gold">Privacy</Link></li><li><Link href="/terms/" className="hover:text-gold">Terms</Link></li></ul>
          </div>
        </div>
      </footer>
      <a href={BRAND.phoneHref} data-cta="sticky" className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-gold py-3.5 font-display text-xl font-extrabold uppercase text-ink shadow-[0_-4px_20px_rgba(0,0,0,.35)] md:hidden"><Phone className="h-5 w-5" aria-hidden="true" /> Call {BRAND.short}: {BRAND.phone}</a>
    </>
  );
}
