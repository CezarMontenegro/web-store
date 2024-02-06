import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';

import { Container } from './App.styles';

function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </Container>
  )
}

export default App
