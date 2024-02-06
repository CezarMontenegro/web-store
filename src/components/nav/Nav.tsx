import { useContext } from 'react';

import { APIContext } from '../../context/Context';

import { Container } from './Nav.styles';

function Nav() {
  const {categories, getProductsByCategory} = useContext(APIContext);
  return (
    <Container>
      {categories.map((category) => {
        return (
          <p key={category.id} onClick={() => getProductsByCategory(category.id)}>{category.name}</p>
        )
      })}
    </Container>
  )
}

export default Nav