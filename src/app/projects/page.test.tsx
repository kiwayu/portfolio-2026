import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import ProjectsPage from "./page";
import { projects } from "@/data/projects";
import { cv } from "@/data/cv";

test("shows a Projects page heading", () => {
  render(<ProjectsPage />);
  expect(
    screen.getByRole("heading", { level: 1, name: /projects/i }),
  ).toBeInTheDocument();
});

test("renders one card per project linking to its GitHub repo", () => {
  render(<ProjectsPage />);
  for (const project of projects) {
    const card = screen.getByRole("link", {
      name: new RegExp(`${project.title} — ${project.tagline}`),
    });
    expect(card).toHaveAttribute("href", project.href);
    expect(card).toHaveAttribute("target", "_blank");
    expect(card.getAttribute("rel")).toContain("noopener");
  }
});

test("each card shows the project description and tech stack", () => {
  render(<ProjectsPage />);
  for (const project of projects) {
    const card = screen.getByRole("link", {
      name: new RegExp(`${project.title} — ${project.tagline}`),
    });
    expect(within(card).getByText(project.description)).toBeInTheDocument();
    for (const tech of project.tech) {
      expect(within(card).getByText(tech)).toBeInTheDocument();
    }
  }
});

test("links to the full GitHub profile", () => {
  render(<ProjectsPage />);
  const profile = screen
    .getAllByRole("link")
    .filter((l) => l.getAttribute("href") === cv.github);
  expect(profile.length).toBeGreaterThan(0);
});
