import { Link, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';

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


  // console.log(cartProductList);
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
        <div className="cart-list">
          {cartProductList.map((product) => (
            <div className="product-container" key={product.id}>
              <div className="trash-container">
                <button>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div className="thumb-container">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="title-container">
                {product.title}
              </div>
              <div className="qty-container">
              <button
                className="qty-button minus"
                // onClick={handleMinusButton}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="qty-amount">
                {product.qty}
              </div>
              <button
                className="qty-button plus"
                // onClick={handlePlusButton}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
              </div>
              <div className="price-container">
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </main>
  </Container>
  )
}

export default ShoppingCart;