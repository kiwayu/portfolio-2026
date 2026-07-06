import { test, expect } from "@playwright/test";

test("home shows one panel per project and activates on hover", async ({
  page,
}) => {
  await page.goto("/");
  const panels = page.locator("a.world-panel");
  await expect(panels).toHaveCount(5);

  const first = panels.first();
  await first.hover();
  await expect(first).toHaveAttribute("data-state", "active");
  await expect(panels.nth(1)).toHaveAttribute("data-state", "inactive");
});

test("nav ABOUT performs a client-side navigation to the CV page", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "ABOUT", exact: true }).first().click();

  await expect(page).toHaveURL("/about");
  await expect(
    page.getByRole("heading", { level: 1, name: "Henry Collister" }),
  ).toBeVisible();
  await expect(page.getByRole("region", { name: /experience/i })).toBeVisible();
});

test("nav PROJECTS shows the card grid with repo links", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "PROJECTS", exact: true })
    .first()
    .click();

  await expect(page).toHaveURL("/projects");
  await expect(
    page.getByRole("heading", { level: 1, name: /projects/i }),
  ).toBeVisible();

  const cards = page.locator("a.project-card");
  await expect(cards).toHaveCount(5);
  await expect(cards.first()).toHaveAttribute(
    "href",
    /^https:\/\/github\.com\//,
  );
  await expect(
    page.getByRole("link", { name: "VIEW ALL ON GITHUB" }),
  ).toBeVisible();
});

test("STACK dropdown deep-links to a skills group on /about", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "STACK" }).hover();

  const languages = page.getByRole("link", { name: "Languages" });
  await expect(languages).toBeVisible();
  await languages.click();

  await expect(page).toHaveURL("/about#skills-languages");
  await expect(
    page.getByRole("region", { name: /languages/i }),
  ).toBeVisible();
});
