import { Link } from 'react-router-dom';

import { Container } from './Card.styles';


interface Props {
  id: number
  img: string;
  title: string ;
  originalPrice: number;
  price: number;
  shipping: boolean;
}

function Card({ id, img, title, originalPrice, price, shipping }: Props) {
  function calculateDiscount() {
    if(originalPrice) {
      return (((originalPrice / price) - 1) * 100).toFixed(2);
    }
  }

  return (
    <Link to={`productDetails/${id}`} style={{ textDecoration: 'none' }}>
      <Container>
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
        <div className="shipping">{shipping && "Frete grátis" }</div>
        <div className="add-button">
          <button>
            Add Product
          </button>
        </div>
      </Container>
    </Link>
  )
}

export default Card;