import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { cv } from "@/data/cv";

export const metadata: Metadata = {
  title: "KIWAYU | Projects",
  description: "Projects by Henry (kiwayu) — all open source on GitHub.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
        <header
          className="rise"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <p className="mb-5 inline-block bg-brand px-3 py-1.5 font-display text-[11px] tracking-[0.3em] text-white">
            MY WORK
          </p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] uppercase leading-[0.95] text-white">
            Projects
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            A selection of things I have built — every one of them open
            source on GitHub.
          </p>
        </header>

        <div className="mt-14 grid gap-[var(--gap)] sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>

        <div
          className="rise mt-20 text-center"
          style={{ "--i": projects.length + 1 } as React.CSSProperties}
        >
          <a
            href={cv.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand px-6 py-3 font-display text-sm tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            VIEW ALL ON GITHUB
          </a>
        </div>
      </main>
    </>
  );
}
