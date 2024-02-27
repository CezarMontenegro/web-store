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
    align-items: center;
  }

  .dropdown-list select {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 2px;
    margin-left: 10px;
    font-weight: bold;
  }  

  select:active {
    border: 1px solid #ffe600;
  }

  select::backdrop {
    background-color: yellow;
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