import { Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useContext } from 'react';

import { APIContext } from '../../context/APIContext';
import { CartContext } from '../../context/CartContext';

import { Container } from './ProductDetails.styles';

interface ProductDetails {
  id: number;
  thumbnail: string;
  title: string ;
  original_price: number;
  price: number;
  shipping: {free_shipping: boolean};
  attributes: {id: string, name: string, value_name: string}[]
}

function ProductDetails() {
  const [productDetails, setProductDetails] = useState<ProductDetails>({} as ProductDetails);
  const [qty, setQty] = useState<number>(0)

  const { id } = useParams();

  const { setWasFirstSearchMade, setProductsList } = useContext(APIContext);
  const { setCartProductList } = useContext(CartContext);

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
  console.log(id, typeof id)

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
              <button
                className="qty-minus"
                onClick={() => setQty((prev) => prev - 1)}
              >
                <i className="fa-regular fa-square-minus"></i>
              </button>
                <p>{qty}</p>
              <button
                className="qty-minus"
                onClick={() => setQty((prev) => prev + 1)}
              >
                <i className="fa-regular fa-square-plus"></i>
              </button>
            </div>
            <div className="add-button">
              <button
                onClick={() => setCartProductList((prev) => [...prev, {id, qty}])}
              >
                Add
              </button>
            </div>
          </div>
          <div className="details">
            <div className="details-title">
              <h4>Features</h4>
            </div>
            <div className="details-features">
              <ul>
                {productDetails.attributes.map((product) => (
                  <li key={product.id}>{`${product.name}: ${product.value_name}`}</li>
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