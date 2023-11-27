import React, { useState } from "react";
import MensOutwear from "./MensOutwear";
import LadiesOutwear from './LadiesOutwear';
import MensTshirt from './MensTshirt';
import LadiesTshirt from './LadiesTshirt';
import Navigator from "./Navigator";
import { Route, Routes, useParams } from 'react-router-dom';

function Categories({cartItemCount, setCartItemCount, cartItems, setCartItems}) {
    const {category} = useParams();

    console.log(category);
    let shoppingCategory;
    if(category === "mens_outerwear")
        shoppingCategory = <MensOutwear cartItemCount={cartItemCount}  setCartItemCount={setCartItemCount} cartItems={cartItems} setCartItems={setCartItems}/>;
    else if(category === "ladies_outerwear")
        shoppingCategory = <LadiesOutwear cartItemCount={cartItemCount} setCartItemCount={setCartItemCount} cartItems={cartItems} setCartItems={setCartItems}/>;
    else if(category === "mens_tshirts")
        shoppingCategory = <MensTshirt cartItemCount={cartItemCount}  setCartItemCount={setCartItemCount} cartItems={cartItems} setCartItems={setCartItems}/>;
    else if(category === "ladies_tshirts")
        shoppingCategory = <LadiesTshirt cartItemCount={cartItemCount}  setCartItemCount={setCartItemCount} cartItems={cartItems} setCartItems={setCartItems}/>;
    return (
        <div>
            {/* <Navigator/> */}
            {shoppingCategory}
            {/* <Routes>
                <Route path='/list/mens_outwear' element={ele}/>
                <Route path='/list/ladies_outerwear' element={<LadiesOutwear/>}/>
                <Route path='/list/mens_tshirts' element={<MensTshirt/>}/>
                <Route path='/list/ladies_tshirts' element={<LadiesTshirt/>}/>
            </Routes> */}
        </div>
    );
}

export default Categories;