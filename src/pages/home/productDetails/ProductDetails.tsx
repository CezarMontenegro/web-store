import { Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useContext } from 'react';

import { APIContext } from '../../../context/APIContext';

import { Container } from './ProductDetails.styles';

interface ProductDetails {
  id: number;
  thumbnail: string;
  title: string ;
  original_price: number;
  price: number;
  shipping: {free_shipping: boolean};
  attributes: {name: string, value_name: string}[]
}


function ProductDetails() {
  const [productDetails, setProductDetails] = useState<ProductDetails>({} as ProductDetails)

  const { id } = useParams();

  const { setWasFirstSearchMade, setProductsList } = useContext(APIContext);

  function handleLogo() {
    setWasFirstSearchMade(false);
    setProductsList([]);
  }

  async function getProductDetails() {
    try {
      const response = await axios(`https://api.mercadolibre.com/items/${id}`)
      setProductDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProductDetails()
  }, []);

  console.log(productDetails)

  return (
    <Container>
      <header>
        <div className="title">
          <Link to="/"><img src="../../public/mercado-livre.svg" alt="logo" onClick={handleLogo}/></Link>
          <h4>Product Details</h4>
        </div>
        <div className='nav'>
          <Link to="/shoppingCart"><i className="fa-solid fa-cart-shopping"></i></Link>
          <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
        </div>
      </header>
      {(Object.keys(productDetails).length == 0) && <p>Loading...</p>}
      {(Object.keys(productDetails).length > 0) && <main>
        <div className="price">
          <h4>{`${productDetails.title} - R$${productDetails.price.toFixed(2)}`}</h4>
        </div>
        <div className="product">
          <div className="card">
            <div className="thumbnail">
              <img src={productDetails.thumbnail} alt={productDetails.title} />
            </div>
            <div className="qty">
              <i className="fa-regular fa-square-minus"></i>
                <p>quanty</p>
              <i className="fa-regular fa-square-plus"></i>
            </div>
          </div>
          <div className="details">
            <div className="details-title">
              <h4>Features</h4>
            </div>
            <div className="details-features">
              <ul>
                {productDetails.attributes.map((product) => (
                  <li>{`${product.name}: ${product.value_name}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="avaliations">

        </div>
      </main>}
    </Container>
  )
}

export default ProductDetails;