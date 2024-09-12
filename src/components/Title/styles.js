import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: auto;
  
`;

export const H1 = styled.h1`
  font-style: normal;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: bold;
  max-width: 510px;
  width: 100%;
  text-align: center;
  padding: 15px;
  color: #4a8fff;

  /* Responsivo para telas médias (tablets e laptops menores) */
  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 10px;
    max-width: 400px; /* Ajusta o tamanho do texto para melhor visualização */
  }

  /* Responsivo para telas pequenas (smartphones) */
  @media (max-width: 480px) {
    font-size: 2rem;
    padding: 5px;
    max-width: 320px; /* Mais compacto em telas pequenas */
  }
`;
