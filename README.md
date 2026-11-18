# dallasevmobilecharging.us

EV Mobile Charging Dallas city site. Next.js 16 (App Router), Tailwind 4, TypeScript. Hosted on the Hostinger Cloud plan (Node.js web app from GitHub), not the VPS.

- Content and facts: `src/lib/brand.ts` (owner-confirmed facts only; no prices, reviews or client names).
- Routes and SEO metadata: `src/routes.tsx`; pages in `src/views/pages.tsx`.
- Env vars: see `.env.example` (GA4, GTM, Clarity, verification codes, IndexNow key).
- Before shipping: `npm run lint && npm run build`, then `npx next start -p 3000` and `npm run check`.
- Template for the other city domains: copy, then change `BRAND` city fields, areas, domain and copy.
