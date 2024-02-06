import { useContext, useEffect } from 'react';

import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

import { APIContext } from '../../context/Context';

import { Container } from './Home.styles';

function Home() {

  const {
    getCategories,
  } = useContext(APIContext);

  useEffect(() => {
    getCategories()
  },[])

  return (
    <>
      <Header />
      <Container>
        <Nav />
        <Main />
      </Container>
      <Footer />
    </>
  )
}

export default Home; 
