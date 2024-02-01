import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1%;
  
.title {
  display: flex;
  align-items: center;
}

.title h4 {
  font-size: 24px;
}

  i {
    font-size: 30px;
    cursor: pointer;
    margin-right: 20px;
  }
`