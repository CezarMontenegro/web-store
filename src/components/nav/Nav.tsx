import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './Nav.styles';

interface Props {
  getProductsByCategory: (categoryId: string) => Promise<void>;
}

interface Category {
  id: string;
  name: string;
}

function Nav({getProductsByCategory}: Props) {

  const [categories, setCategories] = useState<Category[]>([])

  const getCategories = async () => {
    try {
      const response = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCategories()
  },[])

  console.log(categories)
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