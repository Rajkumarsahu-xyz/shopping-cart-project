import './index.css';
import Home from './components/Home';
import Categories from './components/Categories';
import ShoppingCart from './components/ShoppingCart';
import { Link, Route, Routes } from 'react-router-dom';
import Navigator from './components/Navigator';
import { IoMdCart } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="heading">SHOP</h2>
        <Link to={'/cart'}><IoMdCart className='cartImg'/></Link>
      </header>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list/:category' element={<Categories/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
      </Routes>
    </div>
  );
}

export default App;
