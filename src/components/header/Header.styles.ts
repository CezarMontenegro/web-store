import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 50px;
  width: 100%;
  padding: 0 15%;
  border: 1px solid red;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  
  img {
    width: 100px;
    height: 50px;
    cursor: pointer;
  }

  input[type=text] {
    color: rgba(0,0,0,.8980392157);
    font-size: 16px;
    margin: 0;
    border-radius: 2px;
    background-color: #fff;
    display: flex;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    height: 30px;
    width: 60%;
    border-style: solid;
    border-color: rgba(0,0,0,0);
    border-width: 1.5px;
    padding-left: 10px;
  }

  input[type=text]::placeholder {
    color: rgba(0,0,0,.5490196078);
    font-size: 16px;
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li i {
    font-size: 30px;
    color: rgba(0,0,0,.7);
    cursor: pointer;
  }

  li:last-child i {
    margin-left: 40px;
  }
`