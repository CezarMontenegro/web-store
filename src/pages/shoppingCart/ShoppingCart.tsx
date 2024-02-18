import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { APIContext } from '../../context/APIContext';
import { CartContext } from '../../context/CartContext';

import { Container } from './ShoppingCart.styles';

function ShoppingCart() {
  const { setWasFirstSearchMade, setProductsList } = useContext(APIContext);
  const { cartProductList } = useContext(CartContext);

  function handleLogo() {
    setWasFirstSearchMade(false);
    setProductsList([]);
  }

  return (
    <Container>
      <header>
        <div className='title'>
          <Link to="/"><img src="../../public/mercado-livre.svg" alt="logo" onClick={handleLogo}/></Link>
          <h4>Shopping Cart</h4>
        </div>
        <div className='nav'>
          <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
        </div>
      </header>
      <main>
        {cartProductList.map((product) => (
          <p>{`${product.id}, ${product.qty}`}</p>
        ))}
      </main>
  </Container>
  )
}

export default ShoppingCart;