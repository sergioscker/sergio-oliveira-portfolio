import styled from "styled-components";

export const ContainerProject = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 2rem; /* Espaçamento entre os cartões */
  padding: 2rem;
  grid-auto-rows: 1fr;

  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 19rem;
    height: 30rem;
    margin: 2rem;
    color: #fff;
    background-color: #011627;
    box-shadow: 0px -2px 34px 1px rgba(0, 0, 0, 0.55);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 16rem; /* Ajuste do tamanho dos cartões para telas menores */
      height: 28rem;
    }

    @media (max-width: 480px) {
      width: 14rem; /* Cartões menores para telas pequenas */
      height: 24rem;
    }
  }

  .img {
    border-radius: 0;
    width: 19rem;
    height: 13rem;

    @media (max-width: 768px) {
      width: 16rem;
      height: 12rem;
    }

    @media (max-width: 480px) {
      width: 14rem;
      height: 10rem;
    }
  }

  .description {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Ajuste para telas médias */
    }

    @media (max-width: 480px) {
      font-size: 1rem; /* Ajuste para telas pequenas */
    }
  }

  .container-techs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;

    @media (max-width: 480px) {
      gap: 1rem; /* Reduz o espaçamento em telas pequenas */
    }
  }

  .container-buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;

    @media (max-width: 480px) {
      flex-direction: column; /* Botões em coluna em telas pequenas */
      gap: 0.5rem;
    }
  }

  .button {
    background: none;
    border: 1px solid #fff;
    padding: 5px;
    font-size: 0.7rem;

    &:hover {
      transition: all 300ms;
      border: 1px solid #68a9ff;
    }

    @media (max-width: 768px) {
      padding: 4px; /* Ajuste de tamanho para telas médias */
      font-size: 0.65rem;
    }

    @media (max-width: 480px) {
      padding: 3px; /* Ajuste de tamanho para telas pequenas */
      font-size: 0.6rem;
    }
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      transition: all 300ms;
      color: #68a9ff;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;
