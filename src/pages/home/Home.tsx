import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

import {
  getCategories,
  getProductByCategory
} from '../../services/api';

import { Container } from './Home.styles';

interface Props {
  getCatego
}

export interface Category {
  id: string;
  name: string;
}

function Home() {
  const [productsByCategory, setProductsByCategory] = useState<any[]>([]);
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

  const getProductsByCategory = async (CATEGORY_ID: string) => {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`);
      setProductsByCategory(response.data.results);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Nav getProductsByCategory={getProductsByCategory} categories={categories}/>
        <Main productsByCategory={productsByCategory}/>
      </Container>
      <Footer />
    </>
  )
}

export default Home; 
