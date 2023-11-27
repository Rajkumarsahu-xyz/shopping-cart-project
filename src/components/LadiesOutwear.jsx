import React from "react";
import ladiesOutwear from "../data/ladiesOutwear";

function LadiesOutwear() {
    return (
        <div className="main">
            <img src={`https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg`} alt="" />
            <h2>Ladies Outerwear</h2>
            <div className="ladiesOuterwearContainer">
                {
                    ladiesOutwear.map((lw) => {
                       console.log(lw);
                       return ( 
                       <div className="ladiesOuterwearCard">
                            <img src={`https://shop.polymer-project.org/esm-bundled/${lw.image}`} alt="" />
                            <h3>{lw.title}</h3>
                            <p>${lw.price}</p>
                            <button>Add To Cart</button>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}

export default LadiesOutwear;