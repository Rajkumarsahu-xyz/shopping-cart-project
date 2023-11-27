import React from "react";
import mensOutwear from "../data/mensOutwear";

function MensOutwear({
  cartItemCount,
  setCartItemCount,
  cartItems,
  setCartItems,
}) {
  function incrementCartCount() {
    setCartItemCount(cartItemCount + 1);
  }

  function addItemsToCart(item) {
    setCartItems([...cartItems, { item }]);
    console.log(cartItems);
  }

  return (
    <div className="main">
      <img
        src={`https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg`}
        alt=""
      />
      <h2>Men's Outerwear</h2>
      <div className="mensOuterWearContainer">
        {mensOutwear.map((mw) => {
          return (
            <div className="mensOuterWearCard" key={mw.name}>
              <img
                src={`https://shop.polymer-project.org/esm-bundled/${mw.image}`}
                alt=""
              />
              <h3>{mw.title}</h3>
              <p>${mw.price}</p>
              <button
                className="cartBtn"
                onClick={() => {
                  incrementCartCount();
                  addItemsToCart(mw);
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MensOutwear;
