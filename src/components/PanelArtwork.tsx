import type { Project } from "@/lib/types";

/** Hex → rgba helper for layering accent colours */
function rgba(hex: string, alpha: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function patternLayer(project: Project): React.CSSProperties {
  const { accent, pattern } = project.art;
  switch (pattern) {
    case "bubbles":
      return {
        backgroundImage: `radial-gradient(circle at 30% 20%, ${rgba(accent, 0.35)} 0 6px, transparent 7px),
          radial-gradient(circle at 70% 60%, ${rgba(accent, 0.25)} 0 10px, transparent 11px),
          radial-gradient(circle at 45% 85%, ${rgba(accent, 0.3)} 0 4px, transparent 5px)`,
        backgroundSize: "180px 220px, 260px 300px, 140px 170px",
      };
    case "lines":
      return {
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 46px, ${rgba(accent, 0.18)} 46px 48px)`,
      };
    case "grid":
      return {
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0 39px, ${rgba(accent, 0.14)} 39px 40px),
          repeating-linear-gradient(90deg, transparent 0 39px, ${rgba(accent, 0.14)} 39px 40px)`,
      };
    case "diagonal":
      return {
        backgroundImage: `repeating-linear-gradient(45deg, transparent 0 34px, ${rgba(accent, 0.16)} 34px 36px)`,
      };
    case "bars":
      return {
        backgroundImage: `repeating-linear-gradient(90deg, ${rgba(accent, 0.16)} 0 26px, transparent 26px 52px)`,
        backgroundPosition: "bottom",
      };
  }
}

/**
 * Generated placeholder artwork. When `project.imageSrc` is set, the real
 * image replaces all generated layers.
 */
export default function PanelArtwork({ project }: { project: Project }) {
  const { from, via, to, accent } = project.art;

  if (project.imageSrc) {
    return (
      <div className="panel-art">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageSrc}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="panel-art"
      style={{
        background: `linear-gradient(170deg, ${from} 0%, ${via} 55%, ${to} 100%)`,
      }}
    >
      {/* accent glows */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 90% 45% at 50% 0%, ${rgba(accent, 0.28)}, transparent 70%),
            radial-gradient(ellipse 70% 35% at 30% 100%, ${rgba(accent, 0.22)}, transparent 70%)`,
        }}
      />
      {/* pattern */}
      <div className="absolute inset-0" style={patternLayer(project)} />
      {/* giant outlined word */}
      <span className="art-word" aria-hidden="true">
        {project.artWord}
      </span>
      {/* film grain */}
      <div className="art-noise" />
    </div>
  );
}
