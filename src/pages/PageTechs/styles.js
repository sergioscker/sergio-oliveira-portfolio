import styled from "styled-components";

// Media Queries para telas grandes, médias e pequenas
const device = {
  large: "@media (min-width: 1200px)", // Telas grandes
  medium: "@media (min-width: 768px) and (max-width: 1199px)", // Telas médias
  small: "@media (max-width: 768px)", // Telas pequenas
};

export const ContainerTools = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); /* Ajusta o número de colunas conforme o tamanho da tela */
  gap: 1.5rem;
  justify-items: center;
  align-items: center;
  padding: 50px 20px;
  width: 100%;
  min-height: 100vh;

  /* Ajustes para telas grandes */
  ${device.large} {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2.5rem;
    padding: 100px 40px;
  }

  ${device.medium} {
    grid-template-columns: repeat(
      auto-fit,
      minmax(150px, 1fr)
    ); /* Colunas intermediárias em telas médias */
    padding: 80px 30px;
    gap: 2rem;
  }

  ${device.small} {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Mostra 2 colunas em telas pequenas */
    padding: 80px 20px;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Exibe uma coluna em telas muito pequenas */
    gap: 1rem;
    padding: 80px 10px;
  }
`;
