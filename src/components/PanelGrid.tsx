"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import Panel from "./Panel";

/**
 * Azuki-world style panel accordion.
 *
 * Idle state: every panel is desaturated and dimmed.
 * The hovered / focused panel comes alive in full colour, grows slightly
 * and reveals its title bar.
 */
export default function PanelGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main
      className="world-grid flex min-h-svh w-full flex-col gap-[var(--gap)] bg-ink p-[var(--gap)] pt-16 md:h-svh md:flex-row md:pt-[var(--gap)]"
    >
      {projects.map((project, i) => (
        <Panel
          key={project.slug}
          project={project}
          index={i}
          state={active === null ? "neutral" : active === i ? "active" : "inactive"}
          onActivate={() => setActive(i)}
          onDeactivate={() => setActive(null)}
        />
      ))}
    </main>
  );
}
