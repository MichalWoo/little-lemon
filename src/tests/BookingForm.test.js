import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

describe("BookingForm JavaScript Validation Functions", () => {
  const mockSubmitForm = jest.fn();

  test("should show error message when guests number is less than 1", () => {
    render(<BookingForm availableTimes={[]} submitForm={mockSubmitForm} />);

    const guestsInput = screen.getByLabelText(/Number of guests/i);

    // Set the number of guests to 0
    fireEvent.change(guestsInput, { target: { value: "0" } });
    fireEvent.submit(screen.getByRole("button"));

    expect(
      screen.getByText(/Number of guests must be at least 1./i)
    ).toBeInTheDocument();
  });

  test("should enable submit button when form is valid", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Date/i);
    const timeSelect = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);

    // Fill in valid form data
    fireEvent.change(dateInput, {
      target: { value: new Date().toISOString().split("T")[0] },
    });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "1" } });

    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  test("should disable submit button when form is invalid", () => {
    render(<BookingForm availableTimes={[]} submitForm={mockSubmitForm} />);

    // Leave fields empty or invalid
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "0" },
    });

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
