import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RegexForm } from ".";

describe("RegexForm", () => {
  const description = "Get all 4-letter words";
  const pattern = "/\bw{4}\b/g";
  const setDescription = jest.fn();
  const setPattern = jest.fn();
  const setisFormValid = jest.fn();

  it("renders description and pattern inputs with initial values", () => {
    render(
      <RegexForm
        description={description}
        pattern={pattern}
        isFormValid={true}
        setDescription={setDescription}
        setPattern={setPattern}
        setisFormValid={setisFormValid}
      />
    );

    expect(screen.getByLabelText("Description")).toHaveValue(
      "Get all 4-letter words"
    );
    expect(screen.getByLabelText("Pattern")).toHaveValue("/\bw{4}\b/g");
  });

  it("calls setDescription on description input change", () => {
    render(
      <RegexForm
        description={description}
        pattern={pattern}
        isFormValid={true}
        setDescription={setDescription}
        setPattern={setPattern}
        setisFormValid={setisFormValid}
      />
    );

    const descriptionTextfield = screen.getByLabelText("Description");

    fireEvent.change(descriptionTextfield, {
      target: { value: "Extract all 4-letter words" },
    });

    expect(setDescription).toHaveBeenCalledWith("Extract all 4-letter words");
  });

  it("calls setPattern on pattern input change", () => {
    render(
      <RegexForm
        description={description}
        pattern={pattern}
        isFormValid={true}
        setDescription={setDescription}
        setPattern={setPattern}
        setisFormValid={setisFormValid}
      />
    );

    const patternTextfield = screen.getByLabelText("Pattern");

    fireEvent.change(patternTextfield, {
      target: { value: "/\bw{5}\b/g" },
    });

    expect(setPattern).toHaveBeenCalledWith("/\bw{5}\b/g");
  });

  it("shows error and helper text when isFormValid is false", () => {
    render(
      <RegexForm
        description={description}
        pattern={"/\bw{4}\b/["}
        isFormValid={false}
        setDescription={setDescription}
        setPattern={setPattern}
        setisFormValid={setisFormValid}
      />
    );

    const patternTextfield = screen.getByLabelText("Pattern");

    expect(patternTextfield).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Please enter a valid regex")).toBeInTheDocument();
  });
});
