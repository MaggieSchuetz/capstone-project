import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {box-sizing:border-box}
  
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-repeat: no-repeat;
    //background-image: linear-gradient(#fdbc2d,  #6fc3c6 , #097679);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    text-align: center
  }

  h1 {
  //add later
  }

`;

export default GlobalStyle;
