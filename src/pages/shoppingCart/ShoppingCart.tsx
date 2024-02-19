import { Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';

import { APIContext } from '../../context/APIContext';
import { CartContext } from '../../context/CartContext';

import { Container } from './ShoppingCart.styles';

function ShoppingCart() {
  const { setWasFirstSearchMade, setProductsList } = useContext(APIContext);
  const { cartProductList } = useContext(CartContext);

  const navigate = useNavigate();

  function handleLogo() {
    setWasFirstSearchMade(false);
    setProductsList([]);
  }

  function handleBackArrow() {
    navigate(-1);
  }


  return (
    <Container>
      <header>
        <div className='title'>
          <Link to="/"><img src="../../public/mercado-livre.svg" alt="logo" onClick={handleLogo}/></Link>
          <h4>Shopping Cart</h4>
        </div>
        <div className='nav'>
          <div onClick={handleBackArrow}><i className="fa-solid fa-arrow-left"></i></div>
        </div>
      </header>
      <main>
        {cartProductList.map((product) => (
          <p key={product.id}>{`${product.id}, ${product.qty}`}</p>
        ))}
      </main>
  </Container>
  )
}

export default ShoppingCart;