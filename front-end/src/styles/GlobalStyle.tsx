import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f1f1f1;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leaflet-container {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;

export default GlobalStyle;
