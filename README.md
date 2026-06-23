# BrothersPH Website

Static site for [BrothersPH](https://brothersph.netlify.app) — practical stoicism and grounded guidance for Filipino men.

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy

Deployed via Netlify CLI from this directory:

```bash
npx netlify deploy --prod
```

## Analytics

Traffic uses [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/); behavior (heatmaps, recordings) uses [Microsoft Clarity](https://clarity.microsoft.com/). Both load from `analytics.js`.

1. **Cloudflare** — [dash.cloudflare.com](https://dash.cloudflare.com) → Web Analytics → Add site → hostname `brothersph.netlify.app` → copy the **token**.
2. **Clarity** — [clarity.microsoft.com](https://clarity.microsoft.com) → Add project → copy the **project ID** from the setup snippet.
3. Paste both into `analytics.js` (`CF_TOKEN` and `CLARITY_ID`), then redeploy.

Scripts stay off until real IDs replace the placeholders.
