import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 100px;
  width: 100%;
  padding: 0 20%;
  border: 1px solid red;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  
  img {
    width: 200px;
    height: 100px;
  }

  input[type=text] {
    color: rgba(0,0,0,.8980392157);
    font-size: 16px;
    margin: 0;
    border-radius: 2px;
    background-color: #fff;
    display: flex;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    height: 40px;
    width: 100%;
    padding: 10px 60px 10px 15px;
    border-style: solid;
    border-color: rgba(0,0,0,0);
    border-width: 1.5px;
  }

  input[type=text]::placeholder {
    color: rgba(0,0,0,.5490196078);
    font-size: 16px;
    font-weight: 400
  }
`