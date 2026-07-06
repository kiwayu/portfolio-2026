import type { Project } from "@/lib/types";

/**
 * The panels on the homepage (left → right) and the cards on /projects.
 *
 * To swap a panel for another project (or add real artwork later),
 * edit this array only — the layout, hover behaviour and animations
 * are all driven from it. Add `imageSrc: "/art/<file>.jpg"` to replace
 * the generated placeholder art with a real image.
 *
 * EDIT ME: `description` and `tech` appear on the /projects cards.
 */
export const projects: Project[] = [
  {
    slug: "nudibranch-id",
    title: "Nudibranch ID",
    tagline: "Computer-vision species identification",
    href: "https://github.com/kiwayu/NudibranchID.io",
    description:
      "Identifies nudibranch species from reef photos with a computer-vision model.",
    tech: ["Python", "Machine Learning", "Web"],
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
    description:
      "A personal library to log, rate and organise everything you read.",
    tech: ["TypeScript", "React"],
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
    description:
      "Focus sessions and study tools designed to help you learn faster.",
    tech: ["TypeScript", "React"],
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
    description:
      "A concept banking experience focused on clean flows and clarity.",
    tech: ["TypeScript", "Next.js"],
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
    description:
      "End-to-end e-commerce analytics: ingestion, transformation and reporting.",
    tech: ["Python", "SQL"],
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
