import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-container">
          <img src="/little-lemon-logo-footer.webp" alt="Little Lemon Logo" />
          <div>
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>
                <Link to="/" className="nav-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-item">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="nav-item">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="nav-item">
                  Book a Table
                </Link>
              </li>
              <li>
                <Link to="/order-online" className="nav-item">
                  Order online
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-item">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>CONTACT</h3>
            <p>Address: 1234 Lemon St, Chicago, IL</p>
            <p>
              Email: info@littlelemon.com<br></br>Phone: +1 (123) 456-7890
            </p>
            <p>Follow us:</p>
            <div className="footer-social-icons">
              <img src="/fb-icon.webp" alt="facebook icon" />
              <img src="/x-icon.webp" alt="x icon" />
              <img src="/instagram-icon.webp" alt="instagram icon" />
              <img src="/yt-icon.webp" alt="youtube icon" />
            </div>
          </div>
        </div>
        <p className="copyrights"> © 2024 Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
