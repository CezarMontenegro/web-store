import {useState} from 'react';
import axios from 'axios';

import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';



import { Container } from './Home.styles';

function Home() {
    const [categoryId, setCategoryId] = useState<any[]>([]);

  const getProductsByCategory = async (CATEGORY_ID: string) => {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`);
      setCategoryId(response.data.results);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Nav getProductsByCategory={getProductsByCategory}/>
        <Main categoryId={categoryId}/>
      </Container>
      <Footer />
    </>
  )
}

export default Home; 
