import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RegexDashboardProvider } from "@/app/context/RegexDashboardContext";
import { LeftPanel } from ".";

describe("LeftPanel", () => {
  beforeEach(() => {
    render(
      <RegexDashboardProvider>
        <LeftPanel />
      </RegexDashboardProvider>
    );
  });

  it("renders Edit Mode by default", () => {
    const editButton = screen.getByTestId("edit-mode-button");

    expect(editButton).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByTestId("edit-mode")).toBeInTheDocument();
    expect(screen.queryByTestId("approval-mode")).not.toBeInTheDocument();
  });

  it("switches to Approval Mode when toggled", () => {
    const approvalButton = screen.getByTestId("approval-mode-button");

    fireEvent.click(approvalButton);

    expect(approvalButton).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByTestId("approval-mode")).toBeInTheDocument();
    expect(screen.queryByTestId("edit-mode")).not.toBeInTheDocument();
  });
});
