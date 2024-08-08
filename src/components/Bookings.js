import React from "react";
import { useLocation } from "react-router-dom";
import "./Bookings.css";

const BookingConfirmation = () => {
  const location = useLocation();
  const data = location.state || {};

  return (
    <>
      <div className="wrapper">
        <div className="booking-confirmation-box">
          <h2>Your Booking is Confirmed</h2>
          <h3>Thank you!</h3>
        </div>
        <div className="booking-confirmation">
          <p>
            Booking Number: <span>765432</span>
          </p>
          <p>
            Date: <span>{data.date}</span>
          </p>
          <p>
            Time: <span>{data.time}</span>
          </p>
          <p>
            Guests: <span>{data.guests}</span>
          </p>
          <p>
            Occasion: <span>{data.occasion}</span>
          </p>
          <div className="buttons-box">
            <a href="/">
              <button className="buttons">Home</button>
            </a>
            <a href="/">
              <button className="buttons">Add to Calendar</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingConfirmation;
