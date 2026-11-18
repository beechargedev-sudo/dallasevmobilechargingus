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
      <nav aria-label="Breadcrumb" className={cn('flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-wider', dark ? 'text-white/70' : 'text-ink/70')}>
        {all.map((c, i) => (
          <Fragment key={`${c.label}-${i}`}>
            {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
            {c.href && i < all.length - 1 ? <Link href={c.href} className="hover:text-gold hover:underline">{c.label}</Link> : <span className={dark ? 'text-gold' : 'text-ink'} aria-current="page">{c.label}</span>}
          </Fragment>
        ))}
      </nav>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, ...(c.href ? { item: abs(c.href) } : {}) })) }} />
    </>
  );
}
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <details key={it.q} className="faq-item rounded-xl border border-ink/15 bg-white">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-display text-xl font-bold leading-tight">
            <span>{it.q}</span><Plus className="faq-plus h-5 w-5 shrink-0 text-gold transition-transform" strokeWidth={3} aria-hidden="true" />
          </summary>
          <p className="border-t border-ink/10 px-5 py-4 leading-relaxed text-ink/80">{it.a}</p>
        </details>
      ))}
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })) }} />
    </div>
  );
}
const btn = 'inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg px-6 py-3 font-display text-lg font-bold uppercase tracking-wide transition active:translate-y-px';
export function CallButton({ className, label, dark, cta = 'inline' }: { className?: string; label?: string; dark?: boolean; cta?: string }) {
  return (
    <a href={BRAND.phoneHref} data-cta={cta} className={cn(btn, dark ? 'bg-gold text-ink hover:bg-white' : 'bg-ink text-gold hover:bg-gold hover:text-ink', className)}>
      <Phone className="h-[18px] w-[18px]" strokeWidth={2.5} aria-hidden="true" /> {label ?? `Call ${BRAND.short}: ${BRAND.phone}`}
    </a>
  );
}
export function LinkButton({ href, children, dark, className }: { href: string; children: ReactNode; dark?: boolean; className?: string }) {
  return <Link href={href} className={cn(btn, 'border-2', dark ? 'border-white/40 text-white hover:border-gold hover:text-gold' : 'border-ink text-ink hover:bg-ink hover:text-gold', className)}>{children} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>;
}
export function Section({ children, dark, id, className }: { children: ReactNode; dark?: boolean; id?: string; className?: string }) {
  return <section id={id} className={cn('px-5 py-14 sm:py-20', dark ? 'bg-ink text-white' : 'bg-paper text-ink', className)}><div className="mx-auto max-w-6xl">{children}</div></section>;
}
export function PageHero({ crumbs, h1, lead, children }: { crumbs: Crumb[]; h1: string; lead: string; children?: ReactNode }) {
  return (
    <header className="hero-bg px-5 pb-14 pt-8 text-white sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs items={crumbs} dark />
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">{h1}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{lead}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </header>
  );
}
