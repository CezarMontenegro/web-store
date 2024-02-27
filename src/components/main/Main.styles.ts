import styled from 'styled-components';

export const Container = styled.main`
  width: calc(100vw - 250px);
  height: calc(100vh - 50px);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  }

  .info {
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
  }

  .info .dropdown-list {
    display: flex;
  }

  .cards-container {
    height: calc(100% - 30px);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow-y: scroll;
  }
`