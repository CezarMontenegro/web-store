import styled from 'styled-components';

export const Container = styled.header`
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
`