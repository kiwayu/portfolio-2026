import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import PanelGrid from "./PanelGrid";
import { projects } from "@/data/projects";

// Characterization tests for the accordion hover behaviour.

function panelFor(index: number) {
  return screen.getByRole("link", {
    name: `${projects[index].title} — ${projects[index].tagline}`,
  });
}

test("all panels start neutral", () => {
  render(<PanelGrid projects={projects} />);
  for (let i = 0; i < projects.length; i++) {
    expect(panelFor(i)).toHaveAttribute("data-state", "neutral");
  }
});

test("hovering a panel activates it and dims the rest", () => {
  render(<PanelGrid projects={projects} />);
  fireEvent.mouseEnter(panelFor(1));
  expect(panelFor(1)).toHaveAttribute("data-state", "active");
  expect(panelFor(0)).toHaveAttribute("data-state", "inactive");
  fireEvent.mouseLeave(panelFor(1));
  expect(panelFor(0)).toHaveAttribute("data-state", "neutral");
});

test("keyboard focus activates a panel like hover", () => {
  render(<PanelGrid projects={projects} />);
  fireEvent.focus(panelFor(2));
  expect(panelFor(2)).toHaveAttribute("data-state", "active");
  fireEvent.blur(panelFor(2));
  expect(panelFor(2)).toHaveAttribute("data-state", "neutral");
});
