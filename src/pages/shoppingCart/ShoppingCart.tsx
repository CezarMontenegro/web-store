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
  const { setWasFirstSearchMade } = useContext(APIContext);
  const { cartProductList, setCartProductList } = useContext(CartContext);

  //Consts and variables
  const navigate = useNavigate();

  //Functions
  function handleLogo() {
    setWasFirstSearchMade(false);
  }

  function handleBackArrow() {
    navigate(-1);
  }

  function handleTrashButton(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;

    const updatedCartProductList = cartProductList.filter((product) => product.id != target.id);

    setCartProductList(() => {
      localStorage.setItem('cartProductList', JSON.stringify(updatedCartProductList));
      return updatedCartProductList;
    });
  }

  //Decreases qty and save it on localStorage
  function handleMinusButton(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement
    const id = target.id;

    const updatedCartProductList = [...cartProductList];
    const productIndex = updatedCartProductList.findIndex((product) => product.id == id);

    if (updatedCartProductList[productIndex].qty > 0) {
      updatedCartProductList[productIndex].qty -= 1;
      setCartProductList(updatedCartProductList);
    }
  }

  //Increases qty and save it on localStorage
  function handlePlusButton(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement
    const id = target.id;

    const updatedCartProductList = [...cartProductList];
    const productIndex = updatedCartProductList.findIndex((product) => product.id == id);
    updatedCartProductList[productIndex].qty += 1;
    setCartProductList(updatedCartProductList);
  }

  console.log(cartProductList);
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
          {cartProductList.map((product, index) => (
            <div className="product-container" key={product.id}>
              <div className="trash-container">
                <button
                >
                  <i 
                    id={product.id}
                    onClick={(e) => handleTrashButton(e)}
                    className="fa-solid fa-trash">
                  </i>
                </button>
              </div>
              <div className="thumb-container">
                <Link to={`/productDetails/${product.id}`}><img src={product.thumbnail} alt={product.title} /></Link>
              </div>
              <div className="title-container">
                {product.title}
              </div>
              <div className="qty-container">
                <button
                  className="qty-button minus"
                >
                  <i
                    id={product.id}
                    onClick={(e) => handleMinusButton(e)}
                    className="fa-solid fa-minus">
                  </i>
                </button>
                <div className="qty-amount">
                  {cartProductList[index].qty}
                </div>
                <button
                  className="qty-button plus"
                >
                  <i
                    id={product.id}
                    onClick={(e) => handlePlusButton(e)}
                    className="fa-solid fa-plus">
                  </i>
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