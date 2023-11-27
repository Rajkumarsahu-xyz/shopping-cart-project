import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <img
        className="home-img-outerwears"
        src={`https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg`}
        alt=""
      />
      <h2>Men's Outerwear</h2>
      <Link to={"/list/mens_outerwear"}>
        <button className="shop-btn">SHOP NOW</button>
      </Link>
      <img
        className="home-img-outerwears"
        src={`https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg`}
        alt=""
      />
      <h2>Ladies Outerwear</h2>
      <Link to={"/list/ladies_outerwear"}>
        <button className="shop-btn">SHOP NOW</button>
      </Link>

      <div className="home-imgs-tshirts">
        <div>
          <img
            className="home-tshirt-img"
            src={`https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg`}
            alt=""
          />
          <h3>Men's T-Shirts</h3>
          <Link to={"/list/mens_tshirts"}>
            <button className="shop-btn">SHOP NOW</button>
          </Link>
        </div>
        <div>
          <img
            className="home-tshirt-img"
            src={`https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg`}
            alt=""
          />
          <h3>Ladies T-Shirts</h3>
          <Link to={"/list/ladies_tshirts"}>
            <button className="shop-btn">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
