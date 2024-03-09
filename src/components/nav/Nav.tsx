import { SetStateAction, useContext, Dispatch } from 'react';

import { APIContext } from '../../context/APIContext';

import { Container } from './Nav.styles';

interface Props {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsNavShown: Dispatch<SetStateAction<boolean>>;
  isNavShown: boolean;
}

function Nav({setIsLoading, isNavShown, setIsNavShown}: Props) {
  const {categories, getProductsByCategory} = useContext(APIContext);

  function handleClick(id: string) {
    getProductsByCategory(id)
    setIsLoading(true)
  }

  return (
    <Container isNavShown={isNavShown} onMouseLeave={() => setIsNavShown(false)}>
      {categories.map((category) => {
        return (
          <p
            key={category.id}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </p>
        )
      })}
    </Container>
  )
}

export default Nav