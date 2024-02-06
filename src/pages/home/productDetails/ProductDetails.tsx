import { Link } from 'react-router-dom';

function ProductDetails() {
  return (
    <div>
      <header>
        <div className='title'>
          <i className="fa-solid fa-cart-shopping"></i>
          <h4>Carrinho de compras</h4>
        </div>
        <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
      </header>
    </div>
  )
}

export default ProductDetails;