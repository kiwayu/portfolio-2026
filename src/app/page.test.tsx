import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { projects } from "@/data/projects";

// Characterization tests: the home page panel accordion must stay as-is.

test("renders one panel link per project", () => {
  render(<Home />);
  for (const project of projects) {
    const panel = screen.getByRole("link", {
      name: `${project.title} — ${project.tagline}`,
    });
    expect(panel).toHaveAttribute("href", project.href);
  }
});

test("panels open GitHub repos in a new tab safely", () => {
  render(<Home />);
  const panel = screen.getByRole("link", {
    name: `${projects[0].title} — ${projects[0].tagline}`,
  });
  expect(panel).toHaveAttribute("target", "_blank");
  expect(panel.getAttribute("rel")).toContain("noopener");
});
