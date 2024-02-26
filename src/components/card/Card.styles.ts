import styled from 'styled-components';

export const Container = styled.div`
  height: 380px;
  width: 200px;
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: .3s;
  border: 1px solid #d0c7c7;

  &:hover {
  box-shadow: 0 20px 20px 0 rgba(185,185,185);
}

  .img-container {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-container img {
    width: 80%;
    height: 80%;
  }

  .title-container {
    height: 30px;
    overflow: hidden;
    padding: 0 10px;
    text-align: left;
    color: #5e5e5e;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .original-price-container {
    height: 15px;
    padding: 0 10px;
    color: #5e5e5e;
    font-size: 12px;
    text-decoration: line-through;
  }

  .price-container {
    height: 30px;
    padding: 0 10px;
    color: #0e0e0e;
    font-size: 20px;
    display: flex;
    align-items: center;
    font-weight: bolder;
    margin-bottom: 5px;
  }

  .price-container span {
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #54aa4b;
  }

  .shipping-container {
    height: 15px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
    color: #54aa4b;
  }

  .add-button {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-button button {
    background-color: rgb(51, 72, 228);
    color: #fff;
    border: none;
    border-radius: 5px;
    height: 45px;
    width: 180px;
    cursor: pointer;
    font-size: 24px;
    transition: .3s;
  }

  .add-button button:active {
    transform: translate(0, 2px)
  }
`