import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  padding: 0 32px;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Alinha verticalmente se necessário */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c1c1c;
  padding: 24px 32px;
  position: fixed;
  max-width: 1400px;
  width: 100%;
  z-index: 50; /* Garante que o header fique acima de outros elementos */
  border-radius: 24px;

  .logo img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }

  .links-content ul {
    display: flex;
    gap: 20px;
    list-style-type: none;

    li {
      font-size: 1rem;
      font-weight: bold;
      color: #cccccc;

      a {
        color: inherit;
        text-decoration: none;
        font-size: 16px;

        &:hover {
          color: #4a8fff;
          transition: 0.5s ease-in-out;
        }
      }
    }
  }

  .download-cv {
    background-color: #1c1c1c;
    color: #4a8fff;
    padding: 10px 20px;
    border: 2px solid #4a8fff;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
      background-color: #4a8fff;
      color: #1c1c1c;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .logo {
      margin-bottom: 15px;
    }

    .links-content ul {
      gap: 10px;
      flex-direction: column;
      text-align: center;

      li {
        font-size: 14px;
      }
    }

    .download-cv {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 0;
  margin-top: 160px;

  .top-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .top-links {
      display: flex;
      align-items: center;
      gap: 24px;

      a {
        color: #fff;
      }
    }

    .social-media {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 2px solid rgb(30, 59, 139);
      border-radius: 4px;

      &:hover {
        opacity: 0.8;
      }
    }

    .icons {
      transition: transform 300ms ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 120px; /* Ajuste este valor conforme o tamanho do seu header */
  padding: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding: 20px;

  .developer {
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;

    .top-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;

      a {
        color: #fff;
      }
    }

    .social-media {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 10px;
      border: 2px solid rgb(30, 59, 139);
      border-radius: 4px;

      &:hover {
        opacity: 0.8;
      }
    }

    .icons {
      &:hover {
        transition: all 300ms;
        scale: 1.05;
      }
    }

    p {
      margin-top: 40px;
    }
  }
`;
