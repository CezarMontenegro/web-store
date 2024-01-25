import {useState} from 'react';
import axios from 'axios';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';



import './App.css'

function App() {
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
      <Nav getProductsByCategory={getProductsByCategory}/>
      <Main categoryId={categoryId}/>
    </>
  )
}

export default App
