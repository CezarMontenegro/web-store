import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  )
}

export default App
