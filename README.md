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
index.html      Landing page
terms.html      Terms of Service (Portuguese)
privacy.html    Privacy Policy (Portuguese)
style.css       Shared styles
```

## Development

The site is a static site hosted via GitHub Pages. To preview locally:

```sh
python -m http.server 8000
# open http://localhost:8000
```

## Related

- Main repo: [pocketapps-dev/pocketapps](https://github.com/pocketapps-dev/pocketapps)
- Auth package: `packages/pocketapps_auth` (shared Supabase + Google auth)