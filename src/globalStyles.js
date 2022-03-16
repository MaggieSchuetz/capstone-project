import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {box-sizing:border-box}
  
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    text-align: center;
    background-color: azure;
  }

  h1 {
    font-family: 'Fredericka the Great', Verdana, Arial, Helvetica, sans-serif,
    bold;
  }

  h2 {
    font-family: 'Fredericka the Great', Verdana, Arial, Helvetica, sans-serif,
    bold;
    font-size: 15pt;
    color: darkslategray;
  }

`;

export default GlobalStyle;
