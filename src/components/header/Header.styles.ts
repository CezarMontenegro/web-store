import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 50px;
  width: 100%;
  min-width: 320px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffe600;
  padding: 0 40px;
  
  .left-menu {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-menu i {
    font-size: 30px;
    margin: 20px;
    cursor: pointer;
    display: none;
  }

  .left-menu img {
    width: 100px;
    height: 50px;
    cursor: pointer;
  }

  .search-container {
    height: 30px;
    width: 60%;
    display: flex;
    position: relative;
  }

  .search-container button {
    position: absolute;
    top: 2px;
    right: 3px;
    height: 26px;
    width: 30px;
    background-color: #fff;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #fff;
    display: flex;
    border-style: solid;
    border-color: rgba(0,0,0,0);
    border-width: 1.5px;
    box-sizing: border-box;
    cursor: pointer;
    border-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-container button i {
    font-size: 16px;
    margin: 0px;
  }

  .search-container input[type=text] {
    height: 100%;
    width: 100%;
    color: rgba(0,0,0,.8980392157);
    font-size: 16px;
    margin: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: #fff;
    display: flex;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border-style: solid;
    border-color: rgba(0,0,0,0);
    border-width: 1.5px;
    padding-left: 10px;
    box-sizing: border-box;
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

  .nav-header i {
    font-size: 30px;
    margin-left: 40px;
    cursor: pointer;
  }

  i:hover {
    color: blue;
  }

  //tablet
  @media (max-width: 768px) {
    padding: 0 10px;

    .left-menu i {
      display: inline-block;
    }

    .left-menu img {
      margin-right: 30px;
    }
  }

  //mobile L
  @media (max-width: 425px) {
    height: 100px;
    flex-wrap: wrap;

    .search-container {
      order: 3;
      width: 95%;
      margin: 0 auto;
    }
  }

  //mobile S
  @media (max-width: 370px) {
    .left-menu {
      width: 180px;
    }

    .nav-header {
      width: 110px;
      justify-content: space-around;
    }

    .nav-header i{
      margin-left: 10px;
    }
  }
`