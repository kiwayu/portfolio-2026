import type { Project } from "@/lib/types";
import PanelArtwork from "./PanelArtwork";

interface PanelProps {
  project: Project;
  index: number;
  state: "neutral" | "active" | "inactive";
  onActivate: () => void;
  onDeactivate: () => void;
}

export default function Panel({
  project,
  index,
  state,
  onActivate,
  onDeactivate,
}: PanelProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="world-panel h-[42vh] md:h-auto"
      style={{ "--i": index } as React.CSSProperties}
      data-state={state}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      aria-label={`${project.title} — ${project.tagline}`}
    >
      <PanelArtwork project={project} />

      {/* bottom title bar (revealed when active) */}
      <div className="panel-title-bar px-5 pb-5 pt-4 md:px-6 md:pb-6">
        <p className="reveal mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-semibold tracking-[0.22em] text-white/60">
          {project.tagline.toUpperCase()}
        </p>
        <div className="reveal flex items-start gap-2">
          <h2 className="whitespace-nowrap font-display text-[clamp(1.6rem,2.2vw,3rem)] uppercase leading-none text-white">
            {project.title}
          </h2>
          {project.isNew && (
            <span className="mt-0.5 font-display text-[11px] tracking-widest text-tag">
              NEW
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
