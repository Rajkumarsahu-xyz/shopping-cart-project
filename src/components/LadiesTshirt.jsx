import React from "react";
import ladiesTshirt from "../data/ladiesTshirt";

function LadiesTshirt() {
    return (
        <div className="main">
            <img src={`https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg`} alt="" />
            <h2>Ladies T-shirts</h2>
            <div className="ladiesTshirtContainer">
                {
                    ladiesTshirt.map((lt) => {
                        console.log(lt);
                       return ( 
                       <div className="ladiesTshirtCard">
                            <img src={`https://shop.polymer-project.org/esm-bundled/${lt.image}`} alt="" />
                            <h3>{lt.title}</h3>
                            <p>${lt.price}</p>
                            <button>Add To Cart</button>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}

export default LadiesTshirt;