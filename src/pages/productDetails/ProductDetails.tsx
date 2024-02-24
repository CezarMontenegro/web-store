//Libraries
import { Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';

//Contexts
import { APIContext } from '../../context/APIContext';
import { CartContext } from '../../context/CartContext';

//Styles
import { Container } from './ProductDetails.styles';

//Interfaces
interface ProductDetails {
  id: number;
  thumbnail: string;
  title: string ;
  initial_quantity: number;
  original_price: number;
  price: number;
  shipping: {free_shipping: boolean};
  attributes: {id: string, name: string, value_name: string}[];
}

function ProductDetails() {
  //States
  const [productDetails, setProductDetails] = useState<ProductDetails>({} as ProductDetails);
  const [qty, setQty] = useState<number>(0);
  const [maximunStock, setMaximunStock] = useState<number>(0);

  //url params
  const { id } = useParams();

  //Global states
  const { setWasFirstSearchMade } = useContext(APIContext);
  const { cartProductList, setCartProductList } = useContext(CartContext);

  //Functions
  //Fetch the product details and set the state
  async function getProductDetails() {
    try {
      const response = await axios(`https://api.mercadolibre.com/items/${id}`)
      setProductDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  //Fetch qty from localStorage according to product ID that comes in the url
  function getLocalStorageQty() {
    const data = localStorage.getItem(`${id}`);
    if (data) {
      setQty(JSON.parse(data));
    }
  }

  //Get the maximun units of the product the user can buy;
  function getInitialStock() {
    const isProductAlreadyInCart = cartProductList.some((product) => product.id === id);
    if (!isProductAlreadyInCart) setMaximunStock(productDetails.initial_quantity);
    if (isProductAlreadyInCart) {
      const productIndex = cartProductList.findIndex(product => product.id == id);
      setMaximunStock(productDetails.initial_quantity - cartProductList[productIndex].qty);
    }
  }

  // Fetch initial data to render the page;
  useEffect(() => {
    getProductDetails();
    getLocalStorageQty();
  }, []);

  //Updtate maximumStock after productDetails is updated;
  useEffect(() => {
    getInitialStock();
  },[productDetails])

  //It heads back to land page
  function handleLogo() {
    setWasFirstSearchMade(false);
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

  //Add product to the cartProductList
  function handleAddButton() {
    const isProductAlreadyInCart = cartProductList.some((product) => product.id === id);

    if (!isProductAlreadyInCart) {
      const updatedCartProductList = [
        ...cartProductList,
          {
            id,
            qty,
            title: productDetails.title,
            price: productDetails.price,
            thumbnail: productDetails.thumbnail,
          }
      ];
      setCartProductList(updatedCartProductList);
    } else {
      const updatedCartProductList = [...cartProductList];
      const productIndex = updatedCartProductList.findIndex((product) => product.id == id);
      updatedCartProductList[productIndex].qty += qty;
      setCartProductList(updatedCartProductList);
    }
    setMaximunStock(prev => prev - qty);
    setQty(() => {
      const updatedQty = 0;
      localStorage.setItem(`${id}`, JSON.stringify(updatedQty));
      return updatedQty;
    });
  }
  useEffect(() => {
    localStorage.setItem('cartProductList', JSON.stringify(cartProductList));
  }, [cartProductList])

  console.log(cartProductList)
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
                className="qty-button minus"
                onClick={handleMinusButton}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="qty-amount">
                {qty}
              </div>
              <button
                className="qty-button plus"
                onClick={handlePlusButton}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="add-button">
              <button
                onClick={handleAddButton}
                disabled={qty < 1}
              >
                Add Product
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