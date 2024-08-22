import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("should enable submit button when all form fields are filled", () => {
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={["18:00", "19:00"]}
      submitForm={mockSubmitForm}
    />
  );

  const dateInput = screen.getByLabelText(/Date/i);
  const timeSelect = screen.getByLabelText(/Time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const occasionSelect = screen.getByLabelText(/Occasion/i);

  fireEvent.change(dateInput, { target: { value: "2024-08-23" } });
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  fireEvent.change(guestsInput, { target: { value: "2" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  const submitButton = screen.getByRole("button", { name: /Book a Table/i });
  expect(submitButton).not.toBeDisabled();
});
