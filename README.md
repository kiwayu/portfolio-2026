# kiwayu — World

Personal portfolio homepage styled after [azuki.com/world](https://www.azuki.com/world):
a full-viewport grid of vertical panels, one per project. The grid idles in
grayscale — hovering a panel brings it alive in full colour and reveals its title bar.

Built with **Next.js 16 · TypeScript · Tailwind CSS v4**.

## Run

```bash
npm install
npm run dev   # http://localhost:3000
```

## Swap in a real project

Everything on the homepage is driven by one file: [`src/data/projects.ts`](src/data/projects.ts).
Each entry controls one panel (left → right):

```ts
{
  slug: "my-project",
  title: "My Project",          // big title in the reveal bar
  tagline: "One-line pitch",    // small caps line above the title
  href: "https://github.com/kiwayu/my-project",
  isNew: true,                  // optional yellow NEW tag
  artWord: "WORD",              // giant outlined word in the artwork
  art: { from, via, to, accent, pattern }, // generated placeholder art
  imageSrc: "/art/my-project.jpg", // optional — replaces generated art
}
```

To use real artwork, drop an image in `public/art/` and set `imageSrc`.
No component changes needed.

## Where things live

| File | Purpose |
| --- | --- |
| `src/data/projects.ts` | Panel content (edit this to swap projects) |
| `src/components/PanelGrid.tsx` | Hover state orchestration |
| `src/components/Panel.tsx` | One panel + title-bar reveal |
| `src/components/PanelArtwork.tsx` | Generated placeholder art |
| `src/components/Nav.tsx` | Fixed nav + mobile hamburger |
| `src/app/globals.css` | Theme tokens, easing curves, panel animations |

## Behaviour notes

- Desktop: hover or keyboard-focus a panel to activate it; click opens the repo.
- Mobile: panels stack vertically, always in colour, titles visible; tap opens the repo.
- `prefers-reduced-motion` disables the entrance stagger and all transitions.
