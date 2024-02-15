import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import ProductDetails from './pages/productDetails/productDetails';

import { Container } from './App.styles';

function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
  )
}

export default App
