import styled from 'styled-components';

export const Container = styled.div`
  height: 350px;
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

  .img {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img img {
    width: 80%;
    height: 80%;
  }

  .title {
    height: 30px;
    overflow: hidden;
    padding: 0 10px;
    text-align: left;
    color: #5e5e5e;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .original-price {
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

  .shipping {
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
    color: #54aa4b;
  }



`