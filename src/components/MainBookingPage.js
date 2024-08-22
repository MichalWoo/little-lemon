import React, { useReducer, useState } from "react";
import BookingPage from "./BookingPage";
import { useNavigate } from "react-router-dom";

export const initializeTimes = () => [
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export const timesReducer = (state, action) => {
  switch (action.type) {
    case "book_time":
      return state.filter((time) => time !== action.time);
    case "reset_times":
      return initializeTimes();
    default:
      return state;
  }
};

const MainBookingPage = () => {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    setBookings((prevBookings) => [...prevBookings, formData]);
    dispatch({ type: "book_time", time: formData.time });
    navigate("/confirmation", { state: formData });
  };

  return (
    <div className="wrapper">
      <div className="booking">
        <BookingPage
          availableTimes={availableTimes}
          dispatch={dispatch}
          setBookings={setBookings}
          bookings={bookings}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};

export default MainBookingPage;
