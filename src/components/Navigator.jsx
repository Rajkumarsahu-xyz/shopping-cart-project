import React from "react";
import { Link } from "react-router-dom";
import ladiesOutwear from '../data/ladiesOutwear.js';
import mensOutwear from '../data/mensOutwear.js';
import mensTshirt from '../data/mensTshirt.js';
import ladiesTshirt from '../data/ladiesTshirt.js'

function Navigator() {
    return (
        <div className="navigationBtns">
            <Link to={`/list/${mensOutwear[0].category}`}><button className="categoryBtns">Men's Outwear</button></Link>
            <Link to={`/list/${ladiesOutwear[0].category}`}><button className="categoryBtns">Ladies Outwear</button></Link>
            <Link to={`/list/${mensTshirt[0].category}`}><button className="categoryBtns">Men's Tshirts</button></Link>
            <Link to={`/list/${ladiesTshirt[0].category}`}><button className="categoryBtns">Ladies Tshirts</button></Link>
            
        </div>
    );
}

export default Navigator;