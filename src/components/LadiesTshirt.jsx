import React from "react";
import ladiesTshirt from "../data/ladiesTshirt";

function LadiesTshirt({cartItemCount, setCartItemCount, cartItems, setCartItems}) {
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
            <img src={`https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg`} alt="" />
            <h2>Ladies T-shirts</h2>
            <div className="ladiesTshirtContainer">
                {
                    ladiesTshirt.map((lt) => {
                        console.log(lt);
                       return ( 
                       <div className="ladiesTshirtCard" key={lt.name}>
                            <img src={`https://shop.polymer-project.org/esm-bundled/${lt.image}`} alt="" />
                            <h3>{lt.title}</h3>
                            <p>${lt.price}</p>
                            <button className="cartBtn" onClick={() => { incrementCartCount(); addItemsToCart(lt); }}>Add To Cart</button>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}

export default LadiesTshirt;