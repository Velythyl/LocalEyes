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

The website describes the proposed service and clearly identifies it as in development. It omits internal financials, interviews, research notes, team identifiers, and unconfirmed partnerships. The phone conversation is labelled illustrative. There are no invented testimonials, signup submissions, analytics, cookies, or persistent storage. The interactive question planner keeps choices only in React state and resets on refresh.

Only `dist/` is deployed by the workflow. The source PowerPoint decks and `image.png` are not copied to the public site. **GitHub repository visibility is separate from GitHub Pages:** if making this source repository public, remove the original decks and design reference first if they should remain private; `.gitignore` does not remove already tracked files.

Typography uses Google Fonts, with local system fallbacks. Icons are bundled from Lucide. To avoid third-party font requests, remove the Google Fonts `@import` from `src/styles.css` or self-host the fonts.

## Editing

- Content, phone interaction, question planner, FAQs: `src/main.jsx`
- Design and responsive layouts: `src/styles.css`
- Title, metadata: `index.html`
- Deployment configuration: `.github/workflows/deploy.yml`

Before accepting bookings or email addresses, connect a real service, supply the appropriate privacy information, and update the development status and confirmed offering.
