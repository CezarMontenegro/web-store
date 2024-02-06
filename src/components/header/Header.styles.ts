import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffe600;
  
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

  .nav-header {
    display: flex;
    flex-direction: row;
    width: 150px;
  }

  a:visited {
    color: #000;
  }

  i {
    font-size: 30px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
`