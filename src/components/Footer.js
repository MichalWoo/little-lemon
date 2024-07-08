// src/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/Little-Lemon-logo.jpg" alt="Little Lemon Logo" />
      </div>
      <nav className="footer-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <div className="contact-details">
        <p>Contact us:</p>
        <p>Address: 1234 Lemon St, Lemonville, CA</p>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="social-media">
        <p>Follow us:</p>
        <ul>
          <li>
            <a href="/fb">Facebook</a>
          </li>
          <li>
            <a href="/X">X</a>
          </li>
          <li>
            <a href="/instagram">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
