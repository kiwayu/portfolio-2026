# Portfolio

A personal portfolio homepage: a full-viewport grid of vertical panels, one per
project. The grid idles in grayscale; hovering a panel brings it to full colour
and reveals its title bar.

Built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing projects

All homepage content is driven by a single file: `src/data/projects.ts`. Each
entry renders one panel, left to right:

```ts
{
  slug: "my-project",
  title: "My Project",        // title shown in the reveal bar
  tagline: "One-line pitch",  // small line above the title
  href: "https://github.com/kiwayu/my-project",
  isNew: true,                // optional "new" tag
  artWord: "WORD",            // large outlined word in the artwork
  art: { from, via, to, accent, pattern }, // generated placeholder art
  imageSrc: "/art/my-project.jpg",         // optional, replaces generated art
}
```

To use real artwork, drop an image in `public/art/` and set `imageSrc`. No
component changes are needed.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/data/projects.ts` | Panel content |
| `src/components/PanelGrid.tsx` | Hover-state orchestration |
| `src/components/Panel.tsx` | A single panel and its title-bar reveal |
| `src/components/PanelArtwork.tsx` | Generated placeholder art |
| `src/components/Nav.tsx` | Fixed nav and mobile menu |
| `src/app/globals.css` | Theme tokens and animations |

## Behaviour

- Desktop: hover or keyboard-focus a panel to activate it; click opens the link.
- Mobile: panels stack vertically, stay in colour, and show titles; tap opens
  the link.
- `prefers-reduced-motion` disables the entrance stagger and transitions.

## License

Released under the [MIT License](LICENSE).
