import { initializeTimes, timesReducer } from "../components/MainBookingPage";

describe("timesReducer", () => {
  test("should remove booked time from available times", () => {
    const initialState = initializeTimes();
    const action = { type: "book_time", time: "18:00" };
    const newState = timesReducer(initialState, action);

    expect(newState).not.toContain("18:00");
  });

  test("should reset available times", () => {
    const initialState = [];
    const action = { type: "reset_times" };
    const newState = timesReducer(initialState, action);

    expect(newState).toEqual(initializeTimes());
  });
});
