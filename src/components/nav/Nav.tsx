import { Category } from '../../pages/home/Home';

import { Container } from './Nav.styles';

interface Props {
  categories: Category[];
  getProductsByCategory: (categoryId: string) => Promise<void>;
}

function Nav({categories, getProductsByCategory}: Props) {
  return (
    <Container>
      {categories.map((category) => {
        return (
          <p onClick={() => getProductsByCategory(category.id)}>{category.name}</p>
        )
      })}
    </Container>
  )
}

export default Nav