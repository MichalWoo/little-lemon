import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="nav-logo">
            <a href="/">
              <img
                src="/Little-Lemon-primary-logo.png"
                alt="Little Lemon Logo"
              />
            </a>
          </div>
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
        </nav>
      </div>
    </header>
  );
};

export default Nav;
