import { Fragment, type ReactNode } from 'react';
import { Link } from '@/lib/router';
import { ChevronRight, Plus, Phone, ArrowRight } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { abs } from '@/lib/site';
import { cn } from '@/lib/utils';

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
export type Crumb = { label: string; href?: string };
export function Breadcrumbs({ items, dark }: { items: Crumb[]; dark?: boolean }) {
  const all: Crumb[] = [{ label: 'Home', href: '/' }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={cn('flex flex-wrap items-center gap-1.5 text-xs font-medium', dark ? 'text-white/70' : 'text-slate')}>
        {all.map((c, i) => (
          <Fragment key={`${c.label}-${i}`}>
            {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
            {c.href && i < all.length - 1 ? <Link href={c.href} className="hover:text-volt hover:underline">{c.label}</Link> : <span className={dark ? 'text-volt' : 'text-navy'} aria-current="page">{c.label}</span>}
          </Fragment>
        ))}
      </nav>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, ...(c.href ? { item: abs(c.href) } : {}) })) }} />
    </>
  );
}
export function Faq({ items, dark }: { items: { q: string; a: string }[]; dark?: boolean }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <details key={it.q} className={cn('faq-item rounded-2xl border', dark ? 'border-white/15 bg-white/5' : 'border-line bg-white')}>
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-display text-lg font-semibold leading-snug">
            <span>{it.q}</span><Plus className="faq-plus h-5 w-5 shrink-0 text-brand transition-transform" strokeWidth={2.5} aria-hidden="true" />
          </summary>
          <p className={cn('border-t px-5 py-4 leading-relaxed', dark ? 'border-white/10 text-white/80' : 'border-line text-slate')}>{it.a}</p>
        </details>
      ))}
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })) }} />
    </div>
  );
}
const btn = 'inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-[15px] font-semibold transition active:translate-y-px';
export function CallButton({ className, label, dark, cta = 'inline' }: { className?: string; label?: string; dark?: boolean; cta?: string }) {
  return (
    <a href={BRAND.phoneHref} data-cta={cta} className={cn(btn, dark ? 'bg-volt text-navy hover:bg-white' : 'bg-brand text-white hover:bg-brand-2', className)}>
      <Phone className="h-[17px] w-[17px]" strokeWidth={2.5} aria-hidden="true" /> {label ?? `Call ${BRAND.short}: ${BRAND.phone}`}
    </a>
  );
}
export function LinkButton({ href, children, dark, className }: { href: string; children: ReactNode; dark?: boolean; className?: string }) {
  return <Link href={href} className={cn(btn, 'border', dark ? 'border-white/30 text-white hover:border-volt hover:text-volt' : 'border-navy/25 text-navy hover:border-brand hover:text-brand', className)}>{children} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>;
}
export function Section({ children, dark, id, className }: { children: ReactNode; dark?: boolean; id?: string; className?: string }) {
  return <section id={id} className={cn('px-5 py-16 sm:py-24', dark ? 'bg-navy text-white' : 'bg-mist text-navy', className)}><div className="mx-auto max-w-6xl">{children}</div></section>;
}
export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return <p className={cn('font-display text-xs font-semibold uppercase tracking-[0.28em]', dark ? 'text-volt' : 'text-brand')}>{children}</p>;
}
export function PageHero({ crumbs, h1, lead, eyebrow, children }: { crumbs: Crumb[]; h1: string; lead: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <header className="hero-bg relative overflow-hidden px-5 pb-16 pt-8 text-white sm:pb-24">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <Breadcrumbs items={crumbs} dark />
        {eyebrow && <div className="mt-8"><Eyebrow dark>{eyebrow}</Eyebrow></div>}
        <h1 className={cn('max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl', eyebrow ? 'mt-3' : 'mt-8')}>{h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lead}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </header>
  );
}
