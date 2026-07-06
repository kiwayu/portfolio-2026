/**
 * ─── EDIT ME ─────────────────────────────────────────────────────────
 * Everything on the /about page renders from this file — fill in your
 * real CV here and the page updates itself. To add a portrait, drop an
 * image into /public (e.g. /portrait.jpg) and set `portraitSrc` below.
 * The STACK dropdown in the nav deep-links to each skill group.
 */

export interface CvExperience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface CvEducation {
  school: string;
  qualification: string;
  period: string;
  details: string[];
}

export interface CvSkillGroup {
  /** Anchor id — the nav links to /about#skills-<id> */
  id: string;
  label: string;
  items: string[];
}

export interface Cv {
  name: string;
  alias: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  github: string;
  /** Optional portrait — set to an image path in /public to replace the placeholder art */
  portraitSrc?: string;
  experience: CvExperience[];
  education: CvEducation[];
  skills: CvSkillGroup[];
}

export const cv: Cv = {
  name: "Henry Collister",
  alias: "KIWAYU",
  headline: "Software Developer",
  summary:
    "Placeholder summary — a couple of sentences about who you are, what you build and what you care about. Replace this with your own story.",
  location: "United Kingdom",
  email: "henry.collister@gmail.com",
  github: "https://github.com/kiwayu",
  experience: [
    {
      company: "Placeholder Company",
      role: "Software Engineer",
      period: "2024 — Present",
      location: "Remote",
      highlights: [
        "Placeholder achievement — what you built and the impact it had.",
        "Placeholder achievement — a technology you introduced or improved.",
      ],
    },
    {
      company: "Another Placeholder Ltd",
      role: "Junior Developer",
      period: "2022 — 2024",
      highlights: [
        "Placeholder achievement — a project you shipped end to end.",
      ],
    },
  ],
  education: [
    {
      school: "Placeholder University",
      qualification: "BSc Computer Science",
      period: "2019 — 2022",
      details: [
        "Placeholder detail — grade, dissertation topic or awards.",
      ],
    },
  ],
  skills: [
    {
      id: "languages",
      label: "Languages",
      items: ["TypeScript", "Python", "Java"],
    },
    {
      id: "frameworks",
      label: "Frameworks",
      items: ["React", "Next.js", "Node.js"],
    },
    {
      id: "tools",
      label: "Tools",
      items: ["Git", "Docker", "Linux"],
    },
  ],
};
