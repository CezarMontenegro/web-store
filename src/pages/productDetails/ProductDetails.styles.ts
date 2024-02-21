import styled from 'styled-components';

export const Container = styled.div`
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

  main {
    width: 100vw;
    height: calc(100vh - 50px);
    padding: 20px 40px;
    box-sizing: border-box;
    background-color: #e7e7e7;
  }

  .price {
    height: 5%;
    margin-bottom: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .price h4 {
    font-weight: bolder;
    font-size: 24px;
  }

  .product {
    height: 60%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .card {
    border: 1px solid #d0c7c7;
    width: 280px;
    background-color: #fff;
  }

  .thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
  }

  .thumbnail img {
    height: 200px;
    width: 168px;
  }

  .card .qty {
    width: 180px;
    height: 60px;
    margin: 0 auto 10px auto;
    text-align: center;
    line-height: 65px;

  }

  .qty .qty-button {
    background-color: #fff;
    border: none;
    font-size: 24px;
    color: rgb(51, 72, 228);
    cursor: pointer;
    display: inline-block;
    padding: 0;
  }

  .qty .qty-button:active {
    transform: scale(1.1);
    font-weight: bolder;
  }

  .qty-amount {
    font-size: 24px;
    border: 2px solid rgb(51, 72, 228);
    color: rgb(29, 39, 112);
    border-radius: 50%;
    height: 45px;
    width: 45px;
    text-align: center;
    line-height: 45px;
    display: inline-block;
    margin: 0 30px;
  }

  .card .add-button {
    width: 180px;
    height: 90px;
    margin: 0 auto;
    line-height: 90px;
  }

  .add-button button {
    background-color: rgb(51, 72, 228);
    color: #fff;
    border: none;
    height: 45px;
    width: 180px;
    cursor: pointer;
    font-size: 24px;
    transition: .3s;
  }

  .add-button button:active {
    transform: translate(0, 2px)
  }

  .details {
    width: 79%;
    background-color: #fff;
    border: 1px solid #d0c7c7;
  }

  .details-title {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details-title h4 {
    font-weight: bold;
    font-size: 24px;
  }

  .details-features {
    width: 100%;
    height: calc(100% - 30px);
    overflow: scroll;
  }

  .details-features ul {
    height: 100%;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    line-height: 25px;
    box-sizing: border-box;
  }

  .details-features li {
    list-style: none;
    list-style-position: inside;
  }

  .details-features li::marker {
    margin: 0;
  }

  .add-product {
    width: 39%;
    border: 1px solid blue;
  }

  .avaliations {
    border: 1px solid red;
    height: 30%;
  }

`