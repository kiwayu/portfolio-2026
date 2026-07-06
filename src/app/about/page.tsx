import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { cv } from "@/data/cv";

export const metadata: Metadata = {
  title: "KIWAYU | About",
  description: `${cv.name} — ${cv.headline}. Experience, education and skills.`,
};

function SectionHeading({ id, label }: { id: string; label: string }) {
  return (
    <h2
      id={`${id}-heading`}
      className="mb-8 flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-white/60"
    >
      <span className="h-4 w-1.5 bg-brand" aria-hidden="true" />
      {label}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
        {/* Hero */}
        <header
          className="rise grid gap-10 md:grid-cols-[1fr_260px] md:items-end"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <div>
            <p className="mb-5 inline-block bg-brand px-3 py-1.5 font-display text-[11px] tracking-[0.3em] text-white">
              ABOUT ME
            </p>
            <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] uppercase leading-[0.95] text-white">
              {cv.name}
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-tag">
              {cv.headline}
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
              {cv.summary}
            </p>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-semibold tracking-[0.14em] text-white/60">
              <li>{cv.location}</li>
              <li>
                <a
                  href={`mailto:${cv.email}`}
                  className="transition-colors duration-300 ease-out hover:text-white"
                >
                  {cv.email}
                </a>
              </li>
              <li>
                <a
                  href={cv.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 ease-out hover:text-white"
                >
                  GITHUB
                </a>
              </li>
            </ul>
          </div>

          {/* Portrait — set cv.portraitSrc to replace the placeholder */}
          <div className="portrait relative hidden aspect-[3/4] overflow-hidden md:block">
            {cv.portraitSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cv.portraitSrc}
                alt={cv.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(170deg, #1c1c1c 0%, #2b1114 55%, #101010 100%)",
                }}
              >
                <span className="art-word">{cv.alias}</span>
                <div className="art-noise" />
              </div>
            )}
          </div>
        </header>

        {/* Experience */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="rise mt-24"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <SectionHeading id="experience" label="Experience" />
          <ol className="space-y-12 border-l border-white/10 pl-6 md:pl-8">
            {cv.experience.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-white/40">
                  {job.period}
                </p>
                <h3 className="mt-1.5 font-display text-xl uppercase text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-semibold">
                  <span className="text-tag">{job.company}</span>
                  {job.location && (
                    <span className="text-white/40"> · {job.location}</span>
                  )}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-4 marker:text-brand">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm leading-relaxed text-white/70"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section
          id="education"
          aria-labelledby="education-heading"
          className="rise mt-24"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <SectionHeading id="education" label="Education" />
          <ol className="space-y-10 border-l border-white/10 pl-6 md:pl-8">
            {cv.education.map((entry) => (
              <li key={`${entry.school}-${entry.period}`}>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-white/40">
                  {entry.period}
                </p>
                <h3 className="mt-1.5 font-display text-xl uppercase text-white">
                  {entry.qualification}
                </h3>
                <p className="mt-1 text-sm font-semibold text-tag">
                  {entry.school}
                </p>
                {entry.details.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-4 marker:text-brand">
                    {entry.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-sm leading-relaxed text-white/70"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Skills — anchored so the STACK nav dropdown can deep-link */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="rise mt-24"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <SectionHeading id="skills" label="Skills" />
          <div className="grid gap-[var(--gap)] sm:grid-cols-3">
            {cv.skills.map((group) => (
              <section
                key={group.id}
                id={`skills-${group.id}`}
                aria-labelledby={`skills-${group.id}-heading`}
                className="border border-white/10 bg-white/[0.02] p-6"
              >
                <h3
                  id={`skills-${group.id}-heading`}
                  className="font-display text-xs uppercase tracking-[0.25em] text-white/60"
                >
                  {group.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-white/15 px-2.5 py-1 text-xs font-medium text-white/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
