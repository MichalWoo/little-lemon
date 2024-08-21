import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <article className="hero">
      <div className="hero-box">
        <img src="./restauranfood.webp" alt="Little Lemon's dish"></img>
      </div>
      <div className="hero-box">
        <h1>Little Lemon</h1>
        <p className="location">Chicago</p>
        <p className="white-text">
          We are a family-owned Mediterranean restaurant dedicated to bringing
          you the authentic flavors of traditional recipes, all served with a
          modern twist. Our passion for quality and heritage shines through in
          every dish we create.
        </p>
        <Link to="/reservations">
          <button>Book a Table</button>
        </Link>
      </div>
    </article>
  );
};

export default CallToAction;
