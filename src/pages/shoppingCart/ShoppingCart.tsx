//Libraries
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

//Contexts
import { APIContext } from '../../context/APIContext';
import { CartContext } from '../../context/CartContext';

//Styles
import { Container } from './ShoppingCart.styles';


function ShoppingCart() {
  //Global states
  const { setWasFirstSearchMade, setProductsList } = useContext(APIContext);
  const { cartProductList } = useContext(CartContext);

  //Consts and variables
  const navigate = useNavigate();

  //Functions
  function handleLogo() {
    setWasFirstSearchMade(false);
    setProductsList([]);
  }

  function handleBackArrow() {
    navigate(-1);
  }

  //Decreases qty and save it on localStorage
  function handleMinusButton() {
    if (qty > 0) {
      setQty((prev) => {
        const updatedQty = prev - 1;
        localStorage.setItem(`${id}`, JSON.stringify(updatedQty));
        return updatedQty;
      });
    }
  }

  //Increases qty and save it on localStorage
  function handlePlusButton() {
    if (qty < maximunStock) {
      setQty((prev) => {
        const updatedQty = prev + 1;
        localStorage.setItem(`${id}`, JSON.stringify(updatedQty));
        return updatedQty;
      });
    } else {
      window.alert('maximum stock has been exceeded');
    }
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
                  onClick={handleMinusButton}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <div className="qty-amount">
                  {product.qty}
                </div>
                <button
                  className="qty-button plus"
                  onClick={handlePlusButton}
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