import React from "react";
import "./BookingPage.css";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch, setBookings, submitForm }) => {
  return (
    <div className="wrapper">
      <div className="booking">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          setBookings={setBookings}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};

export default BookingPage;
