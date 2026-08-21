import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders with the given progress value", () => {
    render(<ProgressBar progress={42} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute("aria-valuenow", "42");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });

  it("clamps values above 100 to 100", () => {
    render(<ProgressBar progress={150} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "100");
  });

  it("clamps values below 0 to 0", () => {
    render(<ProgressBar progress={-20} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "0");
  });

  it("renders the label text when provided", () => {
    render(<ProgressBar progress={30} label="Uploading..." />);
    expect(screen.getByText("Uploading...")).toBeInTheDocument();
  });

  it("does not render a label when not provided", () => {
    render(<ProgressBar progress={30} />);
    expect(screen.queryByText("Uploading...")).not.toBeInTheDocument();
  });
});
