import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import { Container } from './Card.styles';


interface Props {
  id: string;
  img: string;
  title: string ;
  originalPrice: number;
  price: number;
  shipping: boolean;
}

function Card({ id, img, title, originalPrice, price, shipping }: Props) {
  const { cartProductList, setCartProductList } = useContext(CartContext);

  function calculateDiscount() {
    if(originalPrice) {
      return (((originalPrice / price) - 1) * 100).toFixed(2);
    }
  }

  function handleButton() {
    const isProductAlreadyInCart = cartProductList.some((product) => product.id == id);

    if (!isProductAlreadyInCart) {
      const updatedCartProductList = [
        ...cartProductList,
          {
            id,
            qty: 1,
            title,
            price,
            thumbnail: img,
            maximunStock: 1000,
          }
      ];
      setCartProductList(updatedCartProductList);
    } else {
      const updatedCartProductList = [...cartProductList];
      const productIndex = updatedCartProductList.findIndex((product) => product.id == id);
      updatedCartProductList[productIndex].qty += 1;
      setCartProductList(updatedCartProductList);
    }
  }

  return (
    <Container>
        <Link to={`productDetails/${id}`} style={{ textDecoration: 'none' }}>
          <div className="img-container">
            <img src={img} alt={title}/>
          </div>
          <div className="title-container">{title}</div>
          <div className="original-price-container">
            <span>{originalPrice && `R$ ${originalPrice.toFixed(2)}`}</span>
          </div>
          <div className="price-container">
            R$ {price.toFixed(2)}
            <span>{originalPrice && `${calculateDiscount()}% OFF`}</span>
          </div>
          <div className="shipping-container">{shipping && "Frete grátis" }</div>
        </Link>
        <div className="add-button">
          <button onClick={handleButton}>
            Add Product
          </button>
        </div>
      </Container>
  )
}

export default Card;