import styled from "styled-components";

export const ContainerProject = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Grid responsivo */
  gap: 1.5rem;
  padding-top: 100px;

  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #181818;
    box-shadow: 0px -2px 34px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden; /* Garante que as imagens não ultrapassem os limites do card */
    transition: transform 0.3s ease;
    width: 100%;
    max-width: 300px;
    height: auto;
    color: #fff;

    &:hover {
      transform: scale(1.05);
    }

    .img {
      width: 100%;
      height: auto;
      max-height: 150px; /* Altura máxima da imagem */
      object-fit: cover; /* Ajusta a imagem para cobrir o container sem distorção */
    }

    .description {
      text-align: center;
      padding: 0.5rem;

      h5 {
        font-size: 18px;
      }
    }

    .container-techs {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }

    .container-buttons {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      padding-top: 0.5rem;
      flex-wrap: wrap; /* Quebra linha em telas pequenas */
    }

    .button {
      background: none;
      border: 1px solid #fff;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: border-color 0.3s;

      &:hover {
        border-color: #007bff;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        color: #007bff;
      }
    }
  }
`;
