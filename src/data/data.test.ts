import { describe, expect, test } from "vitest";
import { projects } from "./projects";
import { cv } from "./cv";
import { navItems } from "./nav";

const HEX = /^#[0-9a-f]{6}$/i;

describe("projects data", () => {
  test("slugs are unique", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test("every project is fully described for both pages", () => {
    for (const p of projects) {
      expect(p.title).not.toBe("");
      expect(p.tagline).not.toBe("");
      expect(p.artWord).not.toBe("");
      expect(p.description).not.toBe("");
      expect(p.tech.length).toBeGreaterThan(0);
      expect(p.href).toMatch(/^https:\/\/github\.com\//);
    }
  });

  test("artwork colours are valid hex so placeholder art always renders", () => {
    for (const { art } of projects) {
      for (const colour of [art.from, art.via, art.to, art.accent]) {
        expect(colour).toMatch(HEX);
      }
    }
  });
});

describe("cv data", () => {
  test("identity fields are present", () => {
    expect(cv.name).not.toBe("");
    expect(cv.headline).not.toBe("");
    expect(cv.summary).not.toBe("");
    expect(cv.email).toContain("@");
    expect(cv.github).toMatch(/^https:\/\/github\.com\//);
  });

  test("every CV section has at least one entry", () => {
    expect(cv.experience.length).toBeGreaterThan(0);
    expect(cv.education.length).toBeGreaterThan(0);
    expect(cv.skills.length).toBeGreaterThan(0);
  });

  test("skill group ids are unique and anchor-safe", () => {
    const ids = cv.skills.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(id).toMatch(/^[a-z0-9-]+$/);
    }
  });
});

describe("nav data", () => {
  test("internal pages are reachable from the nav", () => {
    const hrefs = navItems.flatMap((item) =>
      item.href ? [item.href] : (item.children ?? []).map((c) => c.href),
    );
    expect(hrefs).toContain("/about");
    expect(hrefs).toContain("/projects");
  });

  test("stack dropdown anchors match real skill groups", () => {
    const stack = navItems.find((item) => item.label === "STACK");
    expect(stack?.children?.length).toBeGreaterThan(0);
    for (const child of stack?.children ?? []) {
      const id = child.href.replace("/about#skills-", "");
      expect(cv.skills.map((g) => g.id)).toContain(id);
    }
  });

  test("every dropdown child has a non-empty destination", () => {
    for (const item of navItems) {
      for (const child of item.children ?? []) {
        expect(child.href).not.toBe("");
        expect(child.label).not.toBe("");
      }
    }
  });
});
