import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

jest.mock("./components/UserTable", () => {
  const MockUserTable = () => <div data-testid="user-table" />;
  MockUserTable.displayName = "MockUserTable";
  return MockUserTable;
});

jest.mock("./components/Stopwatch", () => {
  const MockStopwatch = () => <div data-testid="stopwatch" />;
  MockStopwatch.displayName = "MockStopwatch";
  return MockStopwatch;
});

describe("Home page loader", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("shows the loader initially and hides it after the timeout", () => {
    render(<Home />);

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.queryByText("SDLC Agent Demo")).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByText("SDLC Agent Demo")).toBeInTheDocument();
  });

  it("renders the demo progress bar after loading", () => {
    render(<Home />);

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getAllByRole("progressbar").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Demo progress")).toBeInTheDocument();
  });

  it("renders the orange demo progress bar after loading", () => {
    render(<Home />);

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getByText("Demo progress (orange)")).toBeInTheDocument();
    const bars = screen.getAllByRole("progressbar");
    expect(bars.length).toBe(3);
  });

  it("renders the pink demo progress bar after loading", () => {
    render(<Home />);

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getByText("Demo progress (pink)")).toBeInTheDocument();
    const bars = screen.getAllByRole("progressbar");
    expect(bars.length).toBe(3);

    const fills = screen.getAllByTestId("progress-bar-fill");
    const pinkFill = fills.find(
      (el) => (el as HTMLElement).style.backgroundColor === "rgb(236, 72, 153)"
    );
    expect(pinkFill).toBeTruthy();
  });
});
