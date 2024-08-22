import React, { useState, useEffect } from "react";
import "./BookingForm.css";

const BookingForm = ({ availableTimes = [], submitForm }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
  });

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    validateField(id, value);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = "";

    switch (fieldName) {
      case "date":
        if (!value) {
          errorMessage = "Date is required.";
        }
        break;
      case "time":
        if (!value) {
          errorMessage = "Time is required.";
        }
        break;
      case "guests":
        if (value < 1) {
          errorMessage = "Number of guests must be at least 1.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Object.values(errors).some((error) => error) ||
      Object.values(formData).some((field) => !field)
    ) {
      return;
    }

    submitForm(formData);
  };

  const isFormValid =
    Object.values(errors).every((error) => !error) &&
    formData.date &&
    formData.time &&
    formData.guests > 0 &&
    formData.occasion;

  return (
    <div>
      <div className="booking-page">
        <h2>Book a Table</h2>
        <p>at Little Lemon, Chicago</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            aria-label="Date"
            aria-required="true"
            min={minDate}
            required
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            value={formData.time}
            onChange={handleChange}
            aria-label="Time"
            aria-required="true"
            required
            disabled={!availableTimes.length}
          >
            <option value="" disabled>
              Select a time
            </option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            placeholder="0"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            aria-label="Number of guests"
            aria-required="true"
            required
          />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
            aria-label="Occasion"
          >
            <option value="" disabled>
              Select your occasion
            </option>
            <option value="Casual">Casual</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div>
          <button
            className={`button ${!isFormValid ? "button-disabled" : ""}`}
            type="submit"
            aria-label="Book a Table"
            disabled={!isFormValid}
          >
            Book a Table
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
