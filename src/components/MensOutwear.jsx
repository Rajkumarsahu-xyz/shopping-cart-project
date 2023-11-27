import React from "react";
import mensOutwear from "../data/mensOutwear";

function MensOutwear() {
    return (
        <div className="main">
            <img src={`https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg`} alt="" />
            <h2>Men's Outerwear</h2>
            <div className="mensOuterWearContainer">
                {
                    mensOutwear.map((mw) => {
                        console.log(mw);
                       return ( 
                       <div className="mensOuterWearCard">
                            <img src={`https://shop.polymer-project.org/esm-bundled/${mw.image}`} alt="" />
                            <h3>{mw.title}</h3>
                            <p>${mw.price}</p>
                            <button>Add To Cart</button>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}

export default MensOutwear;