import React from "react";
import "./Homepage.css";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

const Homepage = () => {
  return (
    <main>
      <div className="container">
        <div className="wrapper">
          <CallToAction />
        </div>
      </div>
      <Specials />
      <section className="container">
        <div className="wrapper">
          <CustomersSay />
        </div>
      </section>
      <Chicago />
    </main>
  );
};

export default Homepage;
