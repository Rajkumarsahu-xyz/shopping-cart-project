import './index.css';
import Home from './components/Home';
import Categories from './components/Categories';
import ShoppingCart from './components/ShoppingCart';
import { Link, Route, Routes } from 'react-router-dom';
import Navigator from './components/Navigator';
import { IoMdCart } from "react-icons/io";
import { useState } from 'react';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <header>
        <h2 className="heading">SHOP</h2>
        <Link to={'/cart'}>
          <IoMdCart className='cartImg'/>
          {(cartItemCount > 0) && <p className='cartCountPara'>{<span className="cartItemCount">{cartItemCount}</span>}</p>}
        </Link>
      </header>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list/:category' element={<Categories cartItemCount={cartItemCount} setCartItemCount={setCartItemCount} cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path='/cart' element={<ShoppingCart cartItemCount={cartItemCount} cartItems={cartItems}/>}/>
      </Routes>
    </div>
  );
}

export default App;
