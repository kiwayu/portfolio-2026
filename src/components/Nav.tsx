"use client";

import Link from "next/link";
import { useState } from "react";
import { connect, navItems, type NavLink } from "@/data/nav";

const desktopLinkClass =
  "flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.18em] text-white/90 transition-colors duration-300 ease-out [text-shadow:0_1px_8px_rgb(0_0_0/0.8)] hover:text-white";

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

/** Internal routes get <Link> prefetching; external / mailto use <a>. */
function NavAnchor({
  link,
  className,
  onClick,
}: {
  link: NavLink;
  className?: string;
  onClick?: () => void;
}) {
  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    );
  }
  return (
    <a
      href={link.href}
      className={className}
      onClick={onClick}
      {...(link.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {link.label}
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-4 md:px-6">
        {/* Logo block */}
        <Link
          href="/"
          className="bg-brand px-3 py-1.5 font-display text-sm tracking-widest text-white shadow-lg shadow-black/40"
        >
          KIWAYU
        </Link>

        {/* Centre links (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.href ? (
              <li key={item.label}>
                <NavAnchor
                  link={{ label: item.label, href: item.href }}
                  className={desktopLinkClass}
                />
              </li>
            ) : (
              <li key={item.label} className="nav-drop">
                <button
                  type="button"
                  aria-haspopup="true"
                  className={desktopLinkClass}
                >
                  {item.label}
                  <Caret />
                </button>
                <div className="nav-drop-menu">
                  <ul>
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        <NavAnchor link={child} />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ),
          )}
        </ul>

        {/* Right CTA (desktop) */}
        <a
          href={connect.href}
          className="hidden text-[13px] font-semibold tracking-[0.18em] text-white/90 transition-colors duration-300 ease-out [text-shadow:0_1px_8px_rgb(0_0_0/0.8)] hover:text-white md:block"
        >
          {connect.label}
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
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-6">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <NavAnchor
                  link={{ label: item.label, href: item.href }}
                  className="text-sm font-semibold tracking-[0.18em] text-white/90"
                  onClick={close}
                />
              ) : (
                <>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-white/40">
                    {item.label}
                  </p>
                  <ul className="mt-2 flex flex-col gap-2 pl-3">
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        <NavAnchor
                          link={child}
                          className="text-sm font-semibold tracking-[0.14em] text-white/80"
                          onClick={close}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
          <li>
            <a
              href={connect.href}
              onClick={close}
              className="text-sm font-semibold tracking-[0.18em] text-tag"
            >
              {connect.label}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
