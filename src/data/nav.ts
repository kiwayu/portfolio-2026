import { cv } from "./cv";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  /** Direct destination — omit when the item opens a dropdown */
  href?: string;
  /** Dropdown entries — the caret is shown when present */
  children?: NavLink[];
}

/**
 * Centre navigation, left → right. Items with `children` render as
 * hover/focus dropdowns. Edit the SOCIALS entries below when you have
 * real profile URLs.
 */
export const navItems: NavItem[] = [
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  {
    label: "STACK",
    children: cv.skills.map((group) => ({
      label: group.label,
      href: `/about#skills-${group.id}`,
    })),
  },
  {
    label: "MORE",
    children: [
      {
        label: "All repositories",
        href: `${cv.github}?tab=repositories`,
        external: true,
      },
      { label: "Email me", href: `mailto:${cv.email}` },
    ],
  },
  {
    label: "SOCIALS",
    children: [
      { label: "GitHub", href: cv.github, external: true },
      // EDIT ME: replace with your real profile URLs
      { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
    ],
  },
];

export const connect: NavLink = {
  label: "CONNECT",
  href: `mailto:${cv.email}`,
};
