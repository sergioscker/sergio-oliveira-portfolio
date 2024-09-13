import styled from "styled-components";

// Media Queries para telas grandes, médias e pequenas
const device = {
  large: "@media (min-width: 1200px)", // Telas grandes
  medium: "@media (min-width: 768px) and (max-width: 1199px)", // Telas médias
  small: "@media (max-width: 768px)", // Telas pequenas
};

export const ContainerTools = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 56px 0;
  width: 100%;

  /* Media Queries */
  ${device.medium} {
    padding: 40px 0;
    gap: 1.5rem; /* Diminuir o espaço entre os itens em telas médias */
  }

  ${device.small} {
    padding: 20px 0;
    gap: 1rem; /* Diminuir o espaço entre os itens em telas pequenas */
  }
`;
