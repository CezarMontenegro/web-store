import { useContext, useState, Dispatch, SetStateAction  } from 'react';
import { Link } from 'react-router-dom';

import { APIContext } from '../../context/APIContext';

import { Container } from './Header.styles';

interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsNavShown: Dispatch<SetStateAction<boolean>>;
}

function Header({setIsLoading, setIsNavShown}: Props) {
  const [query, setQuery] = useState<string>('');


  const { categoryId, setWasFirstSearchMade, setProductList, getProductByQuery, getProductByCategoryAndQuery } = useContext(APIContext);

  function handleLogo() {
    setWasFirstSearchMade(false);
    setProductList([]);
  }

  function handleQuery() {
    categoryId.length ? getProductByCategoryAndQuery(categoryId, query) : getProductByQuery(query);
    setIsLoading(true);
    setWasFirstSearchMade(true);
  }
  
  return (
    <Container>
      <div className="left-menu">
        <i
          className="fa-solid fa-bars"
          onMouseEnter={() => setIsNavShown(true)}
          // onMouseLeave={() => setIsNavShown(false)}
        ></i>
        <img src="../../public/mercado-livre.svg" alt="logo" onClick={handleLogo}/>
      </div>
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