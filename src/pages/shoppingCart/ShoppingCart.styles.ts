import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  min-width: 360px;


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
    width: 90%;
    margin-top: 20px;
    margin-left: 20px;
    box-sizing: border-box;
  }

  .product-container {
    display: flex;
    margin-bottom: 10px;
    height: 100px;
    width: 600px;
  }

  .trash-container {
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .trash-container button {
    height: 40px;
    width: 40px;
    background-color: #e7e7e7;
    border: none;
  }

  .trash-container button i {
    cursor: pointer;
    font-size: 24px;
  }

  .thumb-container {
    /* height: 100%; */
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .thumb-container img {
    width: 100%;
    height: 100%;
  }

  .title-container {
    /* height: 100%; */
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  .qty-container {
    /* height: 100%; */
    width: 120px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .qty-container .qty-button {
    border: none;
    font-size: 24px;
    color: rgb(51, 72, 228);
    background-color: #e7e7e7;
    cursor: pointer;
    display: inline-block;
    padding: 0;
  }

  .qty-container .qty-button:active {
    transform: scale(1.1);
    font-weight: bolder;
  }

  .qty-container .qty-amount {
    font-size: 20px;
    border: 2px solid rgb(51, 72, 228);
    color: rgb(29, 39, 112);
    border-radius: 50%;
    height: 40x;
    width: 40px;
    text-align: center;
    line-height: 35px;
    display: inline-block;
  }

  .price-container {
    /* height: 100%; */
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .total-price-container {
    margin-left: 20px;
    margin-top: 10px;
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 24px;
  }

  .total-price-container div:last-child {
    margin-right: 20px;
  }

  @media (max-width: 625px) {
    .product-container {
      flex-wrap: wrap;
      width: 350px;
      height: 150px;
    }

    .trash-container {
      display: none;
    }

    .total-price-container {
      flex-direction: column;
    }
  }

  @media (max-width: 425px) {
    header .title h4 {
      display: none;
    }

    .product-container {
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    .title-container {
      width: 160px;
    }
  }
`