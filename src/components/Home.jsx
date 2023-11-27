import React from "react";

function Home() {
    return (
        <div className="home-container">
            <img src={`https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg`} alt="" />
            <img src={`https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg`} alt="" />

            <div className="home-imgs-div">
                <img className="home-img" src={`https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg`} alt="" />
                <img  className="home-img"src={`https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg`} alt="" />
            </div>
        </div>
    );
}

export default Home;