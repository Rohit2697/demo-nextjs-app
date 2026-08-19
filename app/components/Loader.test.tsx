import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader", () => {
  it("renders with default label", () => {
    render(<Loader />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders with a custom label", () => {
    render(<Loader label="Fetching data..." />);
    expect(screen.getByText("Fetching data...")).toBeInTheDocument();
  });

  it("renders without a label when label is empty", () => {
    render(<Loader label="" />);
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("applies the provided size to the spinner", () => {
    const { container } = render(<Loader size={80} />);
    const spinner = container.querySelector(".loader-spinner") as HTMLElement;
    expect(spinner).toBeTruthy();
    expect(spinner.style.width).toBe("80px");
    expect(spinner.style.height).toBe("80px");
  });
});
