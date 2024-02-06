import { Link } from 'react-router-dom';

import { Container } from './Header.styles';

function Header() {
  return (
    <Container>
      <img src="../../public/mercado-livre.svg" alt="logo" />
      <div className='search-container'>
        <input
          type="text"
          name="search-input"
          placeholder="Buscar produtos, marcas e muito mais..." 
          maxLength={120}
        />
        <button>
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className='nav-header'>
          <Link to="shoppingCart"><i className="fa-solid fa-cart-shopping"></i></Link>
          <i className="fa-solid fa-circle-user"></i>
      </div>
    </Container>
  )
}



export default Header;