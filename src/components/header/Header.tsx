import { Container } from './Header.styles';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <img src="../../public/mercado-livre.svg" alt="logo" />
      <input
        type="text"
        name="search-input"
        placeholder="Buscar produtos, marcas e muito mais..." 
        maxLength={120}
      />
      <div>
        <ul>
          <li><i className="fa-solid fa-circle-user"></i></li>
          <li><Link to="shoppingCart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
        </ul>
      </div>
    </Container>
  )
}



export default Header;