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
  }

  .price {
    border: 1px solid red;
    height: 5%;
    margin-bottom: 10px;
  }

  .second-container {
    border: 1px solid red;
    height: 60%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .thumbnail {
    border: 1px solid blue;
    width: 33%;

    img {
      height: 100%;
      width: 100%;
    }
  }


  .details {
    width: 33%;
    border: 1px solid blue;
  }

  .add-product {
    width: 33%;
    border: 1px solid blue;
  }

  .avaliations {
    border: 1px solid red;
    height: 30%;
  }

`