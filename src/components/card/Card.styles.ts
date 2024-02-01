import styled from 'styled-components';

export const Container = styled.div`
  height: 350px;
  width: 200px;
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;

  .img {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
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

  .price {
    height: 30px;
    padding: 0 10px;
    text-align: left;
    color: #0e0e0e;
    font-size: 24px;
  }



`