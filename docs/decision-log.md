# Decision log

## 2026-11-18
- Built from the Miami city-site template (see that repo's decision log for background). Hosted on Hostinger Cloud (Web App from GitHub), default Next output, `next build --webpack`.
- Brand "EV Mobile Charging Dallas". The parent brand is not named on marketing pages, schema or footer; only privacy and terms name Bee Charged EV LLC.
- Same phone, email and the Miami HQ address kept at owner's request (shared NAP can link the sites; owner accepted). The About and Contact pages show the address without calling it a Dallas office.
- No prices, reviews, client names or response-time promises. Quote-based; phone and email only.
- 5 services, 10 Dallas-Fort Worth area pages and neighborhood pages with general-geography notes only. Coverage list is a draft; owner to confirm.
- Bee HQ counter is proxied through this domain (`/_a/t.js`, `/api/t`) and only enabled when BEEHQ_ORIGIN and NEXT_PUBLIC_BEEHQ_SITE_ID are set.

## 2026-11-24
- Dallas stays a Node app on Hostinger Cloud with Git auto-deploy and the env vars already stored in hPanel.
- Hurricane content replaced by a winter storm guide because ice storms, not hurricanes, are the local risk.
