import React from "react";
import "./CustomersSay.css";

const CustomersSay = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-box">
        <div className="testimonials-card">
          <img src="./testimonials-1.jpg" alt="John S."></img>
          <h3>John S.</h3>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <i>
            "Amazing Mediterranean flavors with a modern twist! The dishes are
            bursting with taste, and the family-owned vibe is wonderful."
          </i>
        </div>
        <div className="testimonials-card">
          <img src="./testimonials-3.jpg" alt="Emily R."></img>
          <h3>Emily R.</h3>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <i>
            "My favorite spot for fresh, flavorful Mediterranean food. The
            traditional recipes with modern touches are always a hit."
          </i>
        </div>
        <div className="testimonials-card">
          <img src="./testimonials-2.jpg" alt="Michael L."></img>
          <h3>Michael L.</h3>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <i>
            "Classic Mediterranean dishes with a contemporary spin. The family
            charm and fantastic service make it perfect."
          </i>
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
