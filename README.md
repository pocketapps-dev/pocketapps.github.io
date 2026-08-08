# pocketapps.github.io

Website for **PocketApps** — [pocketapps.pt](https://pocketapps.pt)

## Apps

| App | Status | Description |
| --- | --- | --- |
| PocketExpenses | Available | Expense tracker (recurring & one-off) |
| PocketFuel | Coming soon | Fuel & vehicle costs |
| PocketShopping | Coming soon | Shopping lists & price tracking |

## Structure

```
index.html       Landing page
apps.html        Apps page
features.html    Funcionalidades page
pricing.html     Pricing page
themes.html      Themes page
ativar.html      Activation guide
conta.html       Account / auth page
contact.html     Contact page
terms.html       Terms of Service (Portuguese)
privacy.html     Privacy Policy (Portuguese)
header.html      Navbar partial (injected by layout.js)
footer.html      Footer partial (injected by layout.js)
layout.js        Injects header/footer, auth state, theme toggle, mobile menu
style.css        Shared styles
config.js        Supabase config (deferred)
logo.svg         Site logo
apk/             Built app packages
```

The navbar uses the logo image (`logo.svg`) and collapses into a responsive
dropdown menu with a hamburger toggle on small screens (< 640px).

## Development

The site is a static site hosted via GitHub Pages. To preview locally:

```sh
python -m http.server 8000
# open http://localhost:8000
```

## Related

- Main repo: [pocketapps-dev/pocketapps](https://github.com/pocketapps-dev/pocketapps)
- Auth package: `packages/pocketapps_auth` (shared Supabase + Google auth)