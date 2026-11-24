# LocalEyes

A responsive, static React landing page based on the provided LocalEyes reference and concept decks. Built with Vite; suitable for GitHub Pages without a backend.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev 
```

## Production build

```sh
npm run build
npm run preview
```

The deployable site is generated in `dist/`. Vite uses relative asset URLs, so it works on both a GitHub Pages repository subpath and a custom domain.

## Deploy on GitHub Pages

1. Push this project to your repository's `main` branch.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` builds and deploys the site on pushes to `main`. You can also run the workflow manually from the Actions tab.

If your default branch has another name, update the branch in the workflow. No secrets, backend, or paid services are required.

## Public content and privacy

The website describes the proposed service and clearly identifies it as in development. It omits internal financials, raw interviews, research notes, team identifiers, and unconfirmed partnerships. V2 uses five user-provided validated, anonymized interview quotations. The apartment viewing illustration is labelled as a planned experience. There are no invented testimonials, signup submissions, analytics, cookies, or persistent storage. The interest button displays a local prototype acknowledgement; it does not submit or save interest. The interactive question planner keeps choices only in React state and resets on refresh.

Only `dist/` is deployed by the workflow. The source PowerPoint decks and `image.png` are not copied to the public site. **GitHub repository visibility is separate from GitHub Pages:** if making this source repository public, remove the original decks and design reference first if they should remain private; `.gitignore` does not remove already tracked files.

Typography uses Google Fonts, with local system fallbacks. Icons are bundled from Lucide. To avoid third-party font requests, remove the Google Fonts `@import` from `src/styles.css` or self-host the fonts.

## Editing

- V2 content, viewing illustration, question planner, version menu, FAQs: `src/main.jsx`
- Preserved original V1: `src/V1.jsx`
- Design and responsive layouts: `src/styles.css`
- Title, metadata: `index.html`
- Deployment configuration: `.github/workflows/deploy.yml`

Before accepting bookings or email addresses, connect a real service, supply the appropriate privacy information, and update the development status and confirmed offering.

## Landing page versions

V2 is the default page. The hamburger at the top left opens links to `?version=v2` and the preserved original at `?version=v1`. Both links work directly on GitHub Pages without server routing.

V2 preserves the branding, blue palette, typography, and main section structure while focusing on physical apartment visits, live video calls, standardized inspection checklists, rental scam awareness, and neighbourhood assessment. Five supplied interview insights appear in anonymous quotation cards throughout the page, including “What Students Told Us”. These changes respond to the validation interviews and the A6 V5 landing page instructions. No bookings are accepted while the service is in development.

Keep the public GitHub Pages deployment available for at least six weeks after the final classroom session, as required by the assignment.
