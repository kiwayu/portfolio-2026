# kiwayu

Personal portfolio for Henry (kiwayu): a full-viewport panel accordion on the
homepage, an About page that renders a CV, and a GitHub projects page. The
grid idles in grayscale, and hovering a panel brings it alive in full colour and
reveals its title bar.

Built with **Next.js 16 · TypeScript · Tailwind CSS v4**. Every page is
statically prerendered, and all content is data-driven: swapping projects, CV
entries or images requires no component changes.

## Commands

<!-- AUTO-GENERATED from package.json scripts -->

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server at http://localhost:3000 |
| `npm run build` | Production build (type-checks and prerenders all routes) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest suite in watch mode |
| `npm run test:coverage` | One-shot test run with coverage (80% thresholds) |
| `npx playwright test` | Run the end-to-end suite (starts the dev server itself) |

<!-- END AUTO-GENERATED -->

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Panel accordion, one panel per project, linking to its GitHub repo |
| `/about` | CV: experience, education, skills (anchored for nav deep links), contact |
| `/projects` | Card grid of GitHub projects with descriptions and tech stacks |

## Editing content

All copy lives in three data files. Edit these, never the components:

| File | Controls |
| --- | --- |
| [`src/data/projects.ts`](src/data/projects.ts) | Homepage panels **and** `/projects` cards (title, tagline, description, tech, artwork) |
| [`src/data/cv.ts`](src/data/cv.ts) | Everything on `/about` (name, summary, experience, education, skills) |
| [`src/data/nav.ts`](src/data/nav.ts) | Nav links and dropdown entries (socials, stack anchors) |

### Swapping in real images

- **Project artwork**: drop an image in `public/art/` and set `imageSrc` on the
  project entry, and it replaces the generated placeholder art on both the
  homepage panel and the `/projects` card.
- **Portrait**: drop an image in `public/` and set `portraitSrc` in
  `src/data/cv.ts`.

## Where things live

| File | Purpose |
| --- | --- |
| `src/components/PanelGrid.tsx` | Homepage hover-state orchestration |
| `src/components/Panel.tsx` | One panel + title-bar reveal |
| `src/components/PanelArtwork.tsx` | Generated placeholder art (image-swappable) |
| `src/components/ProjectCard.tsx` | `/projects` card |
| `src/components/Nav.tsx` | Fixed nav, dropdowns, mobile hamburger |
| `src/app/globals.css` | Theme tokens, easing curves, all animations |

## Behaviour notes

- Desktop: hover or keyboard-focus a panel to activate it; click opens the repo.
- Mobile: panels stack vertically, always in colour, titles visible.
- Internal navigation uses prefetched static routes, so page changes are instant.
- `prefers-reduced-motion` disables the entrance stagger and all transitions.

## Testing

Component and data tests run on Vitest + React Testing Library
(`src/**/*.test.{ts,tsx}`); end-to-end flows run on Playwright
(`tests/e2e/`). The TDD evidence report for the current build lives at
[`docs/testing/refine-website.tdd.md`](docs/testing/refine-website.tdd.md).
