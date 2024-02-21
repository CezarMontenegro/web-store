import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 100vh;

  header {
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
  background-color: #ffe600;
  }

  header .title {
    display: flex;
    align-items: center;
  }

  header img {
    width: 100px;
    height: 50px;
    cursor: pointer;
  }

  header h4 {
    font-size: 24px;
    font-weight: bold;
    margin-left: 40px;
  }

  header .nav i {
    font-size: 30px;
    margin-left: 40px;
  }

  header div a:visited {
    color: #000;
  }

  .cart-list {
    width: 50%;
    border: 1px solid red;
    margin-top: 20px;
    margin-left: 20px;
    box-sizing: border-box;
  }

  .product-container {
    border: 1px solid red;
    display: flex;
    margin-bottom: 10px;
  }

  .trash-container {
    border: 1px solid red;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .trash-container button {
    height: 40px;
    width: 40px;
  }

  .thumb-container {
    border: 1px solid red;
    width: 100px;
  }

  .thumb img {
    width: 100%;
    height: 100%;
  }

  .title-container {
    border: 1px solid red;
    width: 20%;

  }

  .qty-container {
    border: 1px solid red;
    width: 20%;

  }

  .price-container {
    border: 1px solid red;
    width: 20%;

  }

`