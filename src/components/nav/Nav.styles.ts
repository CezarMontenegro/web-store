import styled from 'styled-components';

export const Container = styled.nav`
  height: 100%;
  width: 250px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fff;
  
  p {
    cursor: pointer;
  }

  p:hover {
    background-color: #e7e7e7;
    font-weight: bold;
  }
  `