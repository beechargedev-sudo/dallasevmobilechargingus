import { BRAND, SERVICES, AREAS, servicePath, areaPath } from '@/lib/brand';
import { abs } from '@/lib/site';
export const dynamic = 'force-static';
export function GET() {
  const lines = [
    `# ${BRAND.name}`, '',
    `> ${BRAND.name} provides mobile EV charging, fleet and business charging, EV charger installation and equipment across Dallas-Fort Worth, Texas. Founded in ${BRAND.founded}, operating in 30+ states. Pricing is quote-based; a request is not a confirmed dispatch. Phone ${BRAND.phone}. Email ${BRAND.email}.`, '',
    '## Services', ...SERVICES.map((s) => `- [${s.title}](${abs(servicePath(s.slug))}): ${s.blurb}`), '',
    '## Service areas', ...AREAS.map((a) => `- [${a.name}, TX](${abs(areaPath(a.slug))})`), '',
    '## Key pages', `- [About](${abs('/about/')})`, `- [FAQ](${abs('/faq/')})`, `- [Contact](${abs('/contact/')})`, '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
