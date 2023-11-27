import React from "react";

function ShoppingCart({ cartItemCount, cartItems }) {
  console.log(cartItemCount);
  console.log(cartItems);
  return (
    <div className="shoppingCartContainer">
      <h3>Your Cart</h3>
      {cartItemCount > 0 ? (
        <p>({cartItemCount} Items)</p>
      ) : (
        "Your Cart is Empty"
      )}
      <div>
        {cartItems.map((cart) => {
          console.log(cart);
          return (
            <div className="mensOuterWearCard" key={cart.item.name}>
              <img
                src={`https://shop.polymer-project.org/esm-bundled/${cart.item.image}`}
                alt=""
              />
              <h3>{cart.item.title}</h3>
              <p>${cart.item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;
