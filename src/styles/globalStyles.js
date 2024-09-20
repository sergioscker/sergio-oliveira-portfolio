import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
      list-style: none;
      text-decoration: none;
};  

#root {
    max-width: 1920px;
    margin: 0 auto;
  }

   /* Estilos para navegadores que suportam scrollbar personalizado */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: linear-gradient(180deg, #e0f7fa, #0288d1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #0288d1, #01579b); 
  border-radius: 10px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #01579b, #002f6c);
  border-radius: 10px;
}


  body {
    background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
    -webkit-font-smoothing: antialiased;
    padding-top: 100px;
  }
  
  a, button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
