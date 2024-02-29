import { useContext, useEffect, useState } from 'react';

import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

import { APIContext } from '../../context/APIContext';

import { Container } from './Home.styles';

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    getCategories,
  } = useContext(APIContext);

  useEffect(() => {
    getCategories()
  },[])

  return (
    <>
      <Header setIsLoading={setIsLoading}/>
      <Container>
        <Nav setIsLoading={setIsLoading}/>
        <Main setIsLoading={setIsLoading} isLoading={isLoading}/>
      </Container>
      <Footer />
    </>
  )
}

export default Home; 
