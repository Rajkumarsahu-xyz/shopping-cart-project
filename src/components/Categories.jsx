import React from "react";
import MensOutwear from "./MensOutwear";
import LadiesOutwear from "./LadiesOutwear";
import MensTshirt from "./MensTshirt";
import LadiesTshirt from "./LadiesTshirt";
import { useParams } from "react-router-dom";

function Categories({
  cartItemCount,
  setCartItemCount,
  cartItems,
  setCartItems,
}) {
  const { category } = useParams();

  console.log(category);
  let shoppingCategory;
  if (category === "mens_outerwear")
    shoppingCategory = (
      <MensOutwear
        cartItemCount={cartItemCount}
        setCartItemCount={setCartItemCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    );
  else if (category === "ladies_outerwear")
    shoppingCategory = (
      <LadiesOutwear
        cartItemCount={cartItemCount}
        setCartItemCount={setCartItemCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    );
  else if (category === "mens_tshirts")
    shoppingCategory = (
      <MensTshirt
        cartItemCount={cartItemCount}
        setCartItemCount={setCartItemCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    );
  else if (category === "ladies_tshirts")
    shoppingCategory = (
      <LadiesTshirt
        cartItemCount={cartItemCount}
        setCartItemCount={setCartItemCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    );
  return <div>{shoppingCategory}</div>;
}

export default Categories;
