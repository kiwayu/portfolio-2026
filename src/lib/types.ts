export interface Project {
  /** Stable id / slug, also used for future routing (e.g. /world/<slug>) */
  slug: string;
  /** Big display title shown in the reveal bar (uppercase) */
  title: string;
  /** Short tagline shown above the title when the panel is active */
  tagline: string;
  /** Where the panel links to (GitHub repo for now) */
  href: string;
  /** One-or-two sentence description shown on the /projects card */
  description: string;
  /** Tech stack chips shown on the /projects card */
  tech: string[];
  /** Show the yellow "NEW" tag next to the title */
  isNew?: boolean;
  /** Giant background word rendered vertically inside the artwork */
  artWord: string;
  /** Visual theme for the generated placeholder artwork */
  art: {
    /** Base gradient stops (top → bottom) */
    from: string;
    via: string;
    to: string;
    /** Accent used for glows / pattern */
    accent: string;
    /** Pattern style for the artwork layer */
    pattern: "bubbles" | "lines" | "grid" | "diagonal" | "bars";
  };
  /**
   * Optional real artwork. When provided it replaces the generated
   * placeholder art — drop an image in /public and set this path.
   */
  imageSrc?: string;
}
