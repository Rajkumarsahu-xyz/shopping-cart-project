import React from "react";
import ladiesOutwear from "../data/ladiesOutwear";

function LadiesOutwear({cartItemCount, setCartItemCount, cartItems, setCartItems}) {
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
            <img src={`https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg`} alt="" />
            <h2>Ladies Outerwear</h2>
            <div className="ladiesOuterwearContainer">
                {
                    ladiesOutwear.map((lw) => {
                    //    console.log(lw);
                       return ( 
                       <div className="ladiesOuterwearCard" key={lw.name}>
                            <img src={`https://shop.polymer-project.org/esm-bundled/${lw.image}`} alt="" />
                            <h3>{lw.title}</h3>
                            <p>${lw.price}</p>
                            <button className="cartBtn" onClick={() => { incrementCartCount(); addItemsToCart(lw); }}>Add To Cart</button>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}

export default LadiesOutwear;