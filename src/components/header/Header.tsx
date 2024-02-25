import { useContext, useState  } from 'react';
import { Link } from 'react-router-dom';

import { APIContext } from '../../context/APIContext';

import { Container } from './Header.styles';

function Header() {
  const [query, setQuery] = useState<string>('');

  const { categoryId, setWasFirstSearchMade, setProductsList, getProductByQuery, getProductByCategoryAndQuery } = useContext(APIContext);

  function handleLogo() {
    setWasFirstSearchMade(false);
    setProductsList([]);
  }

  function handleQuery() {
    categoryId.length ? getProductByCategoryAndQuery(categoryId, query) : getProductByQuery(query);
    setWasFirstSearchMade(true);
  }
  
  return (
    <Container>
      <img src="../../public/mercado-livre.svg" alt="logo" onClick={handleLogo}/>
      <div className='search-container'>
        <input
          type="text"
          name="search-input"
          placeholder="Buscar produtos, marcas e muito mais..." 
          maxLength={120}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleQuery}
        >
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