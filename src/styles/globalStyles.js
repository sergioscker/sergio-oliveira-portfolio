import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
      cursor: pointer;
};  

#root {
    max-width: 1920px;
    margin: 0 auto;
  }

  body {
    background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
    -webkit-font-smoothing: antialiased;
    padding-top: 100px;
  }
`;

export default GlobalStyles;
