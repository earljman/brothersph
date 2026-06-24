# AGENTS.md

## Cursor Cloud specific instructions

This repo is a **static website** (plain HTML/CSS/JS) for BrothersPH. There is no
package manager, build step, test suite, or linter — the files in the repo root
are served as-is and deployed to Netlify (`netlify.toml`, `publish = "."`).

### Run it (development)
Serve the repo root with any static file server. The documented way (see `README.md`):

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`. `python3` is preinstalled, so no dependency
install is required. Key routes:
- `/` — homepage (`index.html`)
- `/posts/covert-contracts-nice-guy-syndrome.html` — essay linked from the homepage

### Notes / gotchas
- `analytics.js` loads Cloudflare Web Analytics + Microsoft Clarity only when real
  IDs are present (they no-op behind a `REPLACE_` placeholder check). It is safe to
  run locally; the third-party beacons just won't report meaningful data.
- There is **no build/test/lint command**. To "verify" changes, serve the site and
  load the affected page(s) in a browser.
- Deploy is manual via `npx netlify deploy --prod` from the repo root (requires
  Netlify auth) — not needed for local development.
