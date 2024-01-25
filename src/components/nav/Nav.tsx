import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  getProductsByCategory: (categoryId: string) => Promise<void>;
}

function Nav({getProductsByCategory}: Props) {

  interface Category {
    id: string;
    name: string;
  }

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
    <nav>
    <ul>
      {categories.map((category) => {
        return (
          <li onClick={() => getProductsByCategory(category.id)}>{category.name}</li>
        )
      })}
    </ul>
    </nav>
  )
}

export default Nav