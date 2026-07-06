import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { cv } from "@/data/cv";

test("logo links back to the home page", () => {
  render(<Nav />);
  expect(screen.getByRole("link", { name: "KIWAYU" })).toHaveAttribute(
    "href",
    "/",
  );
});

test("ABOUT navigates to the internal about page", () => {
  render(<Nav />);
  for (const link of screen.getAllByRole("link", { name: /^ABOUT$/ })) {
    expect(link).toHaveAttribute("href", "/about");
  }
});

test("PROJECTS navigates to the internal projects page", () => {
  render(<Nav />);
  for (const link of screen.getAllByRole("link", { name: /^PROJECTS$/ })) {
    expect(link).toHaveAttribute("href", "/projects");
  }
});

test("SOCIALS dropdown exposes the GitHub profile", () => {
  render(<Nav />);
  const github = screen
    .getAllByRole("link", { name: /GITHUB/i })
    .find((link) => link.getAttribute("href") === cv.github);
  expect(github).toBeDefined();
});

test("STACK dropdown deep-links into the skills section", () => {
  render(<Nav />);
  const stackLinks = screen
    .getAllByRole("link")
    .filter((link) => link.getAttribute("href")?.startsWith("/about#skills"));
  expect(stackLinks.length).toBeGreaterThan(0);
});

test("CONNECT is a mail link", () => {
  render(<Nav />);
  for (const link of screen.getAllByRole("link", { name: /^CONNECT$/ })) {
    expect(link).toHaveAttribute("href", `mailto:${cv.email}`);
  }
});

test("hamburger toggles the mobile menu", () => {
  render(<Nav />);
  const toggle = screen.getByRole("button", { name: /toggle menu/i });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});
