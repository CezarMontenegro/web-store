import styled from 'styled-components';

interface Props {
  isNavShown: boolean;
}

export const Container = styled.nav<Props>`
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
    font-weight: bold;
  }

  //tablet size
  @media (max-width:768px) {
    display: ${(props) => props.isNavShown ? '' : 'none'};
  }

  
`