import type { Project } from "@/lib/types";
import PanelArtwork from "./PanelArtwork";

/**
 * Card on the /projects grid. Reuses PanelArtwork, so setting
 * `imageSrc` on a project swaps in real artwork here and on the
 * homepage panels at the same time.
 */
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — ${project.tagline}`}
      className="project-card rise"
      style={{ "--i": index } as React.CSSProperties}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <PanelArtwork project={project} />
      </div>
      <div className="border border-t-0 border-white/10 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
          {project.tagline}
        </p>
        <h2 className="mt-1.5 flex items-start gap-2 font-display text-2xl uppercase leading-none text-white">
          {project.title}
          {project.isNew && (
            <span className="mt-0.5 font-display text-[11px] tracking-widest text-tag">
              NEW
            </span>
          )}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="border border-white/15 px-2.5 py-1 text-xs font-medium text-white/80"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
