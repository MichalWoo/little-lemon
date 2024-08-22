import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Booking Form heading", () => {
  render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <App />
    </MemoryRouter>
  );

  const headingElement = screen.getByRole("heading", { name: /Book a Table/i });
  expect(headingElement).toBeInTheDocument();
});
