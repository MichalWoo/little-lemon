import React from "react";
import "./Specials.css";

const Specials = () => {
  return (
    <div className="wrapper">
      <section className="container-white">
        <div className="headline-row-flex">
          <h2>This weeks specials</h2>
          <button>Our Menu</button>
        </div>
        <div className="dishes-container">
          <div className="dish">
            <img src="./bruchetta.jpg" alt="bruchetta"></img>
            <div className="dish-content">
              <div className="dish-content-box">
                <h3>Bruchetta</h3>
                <h3>£5.99</h3>
              </div>
              <p>
                Savor our Bruschetta with crisp baguette slices topped with ripe
                tomatoes, fresh basil, and a drizzle of balsamic glaze.
              </p>
              <button className="span-full-row">Order a delivery</button>
            </div>
          </div>
          <div className="dish">
            <img src="./greek-salad.jpg" alt="greek-salad"></img>
            <div className="dish-content">
              <div className="dish-content-box">
                <h3>Greek Salad</h3>
                <h3>£4.99</h3>
              </div>
              <p>
                Enjoy our Green Salad, a fresh mix of crisp lettuce, cucumbers,
                and cherry tomatoes tossed in a zesty lemon vinaigrette.
              </p>
              <button className="span-full-row">Order a delivery</button>
            </div>
          </div>
          <div className="dish">
            <img src="./lemon-dessert.jpg" alt="lemon dessert"></img>
            <div className="dish-content">
              <div className="dish-content-box">
                <h3>Lemon Dessert</h3>
                <h3>£3.99</h3>
              </div>
              <p>
                Treat yourself to our Lemon Dessert, a creamy and tangy pastry
                that balances rich flavors with the zest of fresh lemons.
              </p>
              <button className="span-full-row">Order a delivery</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specials;
