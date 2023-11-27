import React from "react";
import mensTshirt from "../data/mensTshirt";

function MensTshirt() {
    return (
        <div className="main">
            <img src={`https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg`} alt="" />
            <h2>Men's T-shirts</h2>
            <div className="mensTshirtContainer">
                {
                    mensTshirt.map((mt) => {
                        console.log(mt);
                       return ( 
                       <div className="mensTshirtCard">
                            <img src={`https://shop.polymer-project.org/esm-bundled/${mt.image}`} alt="" />
                            <h3>{mt.title}</h3>
                            <p>${mt.price}</p>
                            <button>Add To Cart</button>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}

export default MensTshirt;