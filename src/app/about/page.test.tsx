import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import AboutPage from "./page";
import { cv } from "@/data/cv";

test("shows my name as the page heading", () => {
  render(<AboutPage />);
  expect(
    screen.getByRole("heading", { level: 1, name: cv.name }),
  ).toBeInTheDocument();
});

test("shows the headline and summary", () => {
  render(<AboutPage />);
  expect(screen.getByText(cv.headline)).toBeInTheDocument();
  expect(screen.getByText(cv.summary)).toBeInTheDocument();
});

test("renders an Experience section with every role from the CV data", () => {
  render(<AboutPage />);
  const section = screen.getByRole("region", { name: /experience/i });
  for (const job of cv.experience) {
    expect(within(section).getByText(job.role)).toBeInTheDocument();
    expect(within(section).getByText(job.company)).toBeInTheDocument();
    expect(within(section).getByText(job.period)).toBeInTheDocument();
    for (const highlight of job.highlights) {
      expect(within(section).getByText(highlight)).toBeInTheDocument();
    }
  }
});

test("renders an Education section with every entry from the CV data", () => {
  render(<AboutPage />);
  const section = screen.getByRole("region", { name: /education/i });
  for (const entry of cv.education) {
    expect(within(section).getByText(entry.school)).toBeInTheDocument();
    expect(within(section).getByText(entry.qualification)).toBeInTheDocument();
  }
});

test("renders a Skills section anchored for nav deep links", () => {
  render(<AboutPage />);
  const section = screen.getByRole("region", { name: /skills/i });
  expect(section).toHaveAttribute("id", "skills");
  for (const group of cv.skills) {
    const groupEl = within(section).getByRole("region", {
      name: new RegExp(group.label, "i"),
    });
    expect(groupEl).toHaveAttribute("id", `skills-${group.id}`);
    for (const item of group.items) {
      expect(within(groupEl).getByText(item)).toBeInTheDocument();
    }
  }
});

test("offers direct contact links", () => {
  render(<AboutPage />);
  const links = screen.getAllByRole("link");
  expect(
    links.some((l) => l.getAttribute("href") === `mailto:${cv.email}`),
  ).toBe(true);
  expect(links.some((l) => l.getAttribute("href") === cv.github)).toBe(true);
});
