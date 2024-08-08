import { render, screen } from "@testing-library/react";
import BookingForm from ".components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Date label", () => {
  render(<BookingForm />);
  const dateLabelElement = screen.getByLabelText("Date");
  expect(dateLabelElement).toBeInTheDocument();
});
