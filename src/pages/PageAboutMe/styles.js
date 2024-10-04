import styled from "styled-components";

// Media Queries para telas grandes, médias e pequenas
const device = {
  large: "@media (min-width: 1200px)", // Telas grandes
  medium: "@media (min-width: 768px) and (max-width: 1199px)", // Telas médias
  small: "@media (max-width: 768px)", // Telas pequenas
};

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Garante que a seção ocupe pelo menos a altura da viewport */

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 2.5rem;
      text-align: left;
      font-weight: bold;
      background: linear-gradient(45deg, #0056b3, #007bff);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
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

    ${device.medium} {
      h1 {
        text-align: center;
      }

      .text {
        font-size: 16px;
        text-align: center;
      }
    }

    ${device.small} {
      padding: 80px 20px;

      h1 {
        text-align: center;
      }

      .text {
        font-size: 16px;
        text-align: center;
      }
    }
  }
`;
