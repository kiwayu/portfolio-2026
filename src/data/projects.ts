import type { Project } from "@/lib/types";

/**
 * The panels on the homepage, left → right.
 *
 * To swap a panel for another project (or add real artwork later),
 * edit this array only — the layout, hover behaviour and animations
 * are all driven from it. Add `imageSrc: "/art/<file>.jpg"` to replace
 * the generated placeholder art with a real image.
 */
export const projects: Project[] = [
  {
    slug: "nudibranch-id",
    title: "Nudibranch ID",
    tagline: "Computer-vision species identification",
    href: "https://github.com/kiwayu/NudibranchID.io",
    isNew: true,
    artWord: "NUDI",
    art: {
      from: "#031c26",
      via: "#0a4d5e",
      to: "#021018",
      accent: "#2dd4bf",
      pattern: "bubbles",
    },
  },
  {
    slug: "book-app",
    title: "Book App",
    tagline: "A library for everything you read",
    href: "https://github.com/kiwayu/book-app",
    artWord: "BOOK",
    art: {
      from: "#2a1205",
      via: "#7c3f10",
      to: "#160a03",
      accent: "#f59e0b",
      pattern: "lines",
    },
  },
  {
    slug: "study-app",
    title: "Study App",
    tagline: "Lock in. Learn faster.",
    href: "https://github.com/kiwayu/study-app",
    artWord: "STUDY",
    art: {
      from: "#03200f",
      via: "#14532d",
      to: "#01130a",
      accent: "#4ade80",
      pattern: "grid",
    },
  },
  {
    slug: "kurione-banking",
    title: "Kurione",
    tagline: "Banking, reimagined",
    href: "https://github.com/kiwayu/Kurione-Banking",
    artWord: "BANK",
    art: {
      from: "#060c2b",
      via: "#1e2a78",
      to: "#03061a",
      accent: "#facc15",
      pattern: "diagonal",
    },
  },
  {
    slug: "analytics-pipeline",
    title: "Analytics",
    tagline: "E-commerce data pipeline",
    href: "https://github.com/kiwayu/e-commerce-analytics-pipeline",
    artWord: "DATA",
    art: {
      from: "#26041d",
      via: "#86198f",
      to: "#13020f",
      accent: "#f472b6",
      pattern: "bars",
    },
  },
];
