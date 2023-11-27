import React from "react";
import mensTshirt from "../data/mensTshirt";

function MensTshirt({cartItemCount, setCartItemCount, cartItems, setCartItems}) {
    function incrementCartCount() {
        setCartItemCount(cartItemCount + 1);
        // setCartItems(prevArray => [...prevArray, {name}]);
    }
    function addItemsToCart(item) {
        setCartItems([...cartItems, {item}]);
        console.log(cartItems);
    }

    return (
        <div className="main">
            <img src={`https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg`} alt="" />
            <h2>Men's T-shirts</h2>
            <div className="mensTshirtContainer">
                {
                    mensTshirt.map((mt) => {
                        console.log(mt);
                       return ( 
                       <div className="mensTshirtCard" key={mt.name}>
                            <img src={`https://shop.polymer-project.org/esm-bundled/${mt.image}`} alt="" />
                            <h3>{mt.title}</h3>
                            <p>${mt.price}</p>
                            <button className="cartBtn" onClick={() => { incrementCartCount(); addItemsToCart(mt); }}>Add To Cart</button>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}

export default MensTshirt;