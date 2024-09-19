import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh; /* Garante que a seção ocupe pelo menos a altura da viewport */

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 2.5rem;
      text-align: left;
      color: #007bff;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    }

    .text {
      font-size: 18px;
      line-height: 1.5rem;
      color: #fff;
      text-align: left;

      span {
        color: #007bff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 1225px) {
    .text {
      font-size: 16px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    padding: 120px 0;
  }
`;
