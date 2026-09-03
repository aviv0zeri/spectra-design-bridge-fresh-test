import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./App.jsx";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("routing", () => {
  it("renders the dashboard at /", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: "Dashboard Overview" })).toBeInTheDocument();
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
  });

  it("renders the reports page at /reports", () => {
    renderAt("/reports");
    expect(screen.getByRole("heading", { name: "Reports" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Week" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Month" })).toBeInTheDocument();
  });

  it("renders the week state directly from the URL, no interaction required", () => {
    renderAt("/reports?range=week");
    expect(screen.getByRole("link", { name: "Week" })).toHaveClass("is-active");
    expect(screen.getByRole("link", { name: "Month" })).not.toHaveClass("is-active");
    expect(screen.getByText("Sessions this week")).toBeInTheDocument();
    expect(screen.getByText("1,204")).toBeInTheDocument();
  });

  it("renders the month state directly from the URL, no interaction required", () => {
    renderAt("/reports?range=month");
    expect(screen.getByRole("link", { name: "Month" })).toHaveClass("is-active");
    expect(screen.getByRole("link", { name: "Week" })).not.toHaveClass("is-active");
    expect(screen.getByText("Sessions this month")).toBeInTheDocument();
    expect(screen.getByText("5,842")).toBeInTheDocument();
  });

  it("shares the Sidebar (and its Northstar brand mark) on /", () => {
    renderAt("/");
    expect(screen.getByText("Northstar")).toBeInTheDocument();
  });

  it("shares the Sidebar (and its Northstar brand mark) on /reports", () => {
    renderAt("/reports");
    expect(screen.getByText("Northstar")).toBeInTheDocument();
  });

  it("marks the Reports nav link active on /reports", () => {
    renderAt("/reports");
    expect(screen.getByRole("link", { name: /Reports/ })).toHaveClass("is-active");
  });

  it("marks the Dashboard nav link active on /", () => {
    renderAt("/");
    expect(screen.getByRole("link", { name: /Dashboard/ })).toHaveClass("is-active");
  });
});
