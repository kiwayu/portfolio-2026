"use client";

import { useState } from "react";

const links = [
  { label: "ABOUT", href: "https://github.com/kiwayu", caret: false },
  { label: "PROJECTS", href: "https://github.com/kiwayu?tab=repositories", caret: false },
  { label: "STACK", href: "#", caret: true },
  { label: "MORE", href: "#", caret: true },
  { label: "SOCIALS", href: "#", caret: true },
];

function Caret() {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      aria-hidden="true"
      className="opacity-70"
    >
      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-4 md:px-6">
        {/* Logo block */}
        <a
          href="/"
          className="bg-brand px-3 py-1.5 font-display text-sm tracking-widest text-white shadow-lg shadow-black/40"
        >
          KIWAYU
        </a>

        {/* Centre links (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.18em] text-white/90 transition-colors duration-200 [text-shadow:0_1px_8px_rgb(0_0_0/0.8)] hover:text-white"
              >
                {link.label}
                {link.caret && <Caret />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA (desktop) */}
        <a
          href="mailto:henry.collister@gmail.com"
          className="hidden text-[13px] font-semibold tracking-[0.18em] text-white/90 transition-colors duration-200 [text-shadow:0_1px_8px_rgb(0_0_0/0.8)] hover:text-white md:block"
        >
          CONNECT
        </a>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-ink/95 backdrop-blur-sm transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-[0.18em] text-white/90"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:henry.collister@gmail.com"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-[0.18em] text-tag"
            >
              CONNECT
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
