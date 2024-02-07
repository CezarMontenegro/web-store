import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { APIContext } from '../../../context/APIContext';

import { Container } from './ProductDetails.styles';

function ProductDetails() {

  const { setWasFirstSearchMade, setProductsList } = useContext(APIContext);

  function handleLogo() {
    setWasFirstSearchMade(false);
    setProductsList([]);

  }

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
    </Container>
  )
}

export default ProductDetails;