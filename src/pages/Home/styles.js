import styled from "styled-components";

// Variáveis de tema para cores e espaçamentos
const theme = {
  primaryColor: "#4a8fff",
  darkColor: "#1c1c1c",
  lightColor: "#cccccc",
  borderColor: "rgb(30, 59, 139)",
  spacing: "24px",
  iconSize: "55px",
  borderRadius: "24px",
  maxWidth: "1400px",
  imagePadding: "16px", // Padding para imagem no TopContainer
  hamburgerSize: "24px", // Tamanho do ícone do menu de hambúrguer
};

// Media Queries para telas grandes, médias e pequenas
const device = {
  large: "@media (min-width: 1200px)", // Telas grandes
  medium: "@media (min-width: 768px) and (max-width: 1199px)", // Telas médias
  small: "@media (max-width: 768px)", // Telas pequenas
};

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${theme.maxWidth};
  width: 100%;
  padding: 0 32px;
  margin: 0 auto; // Centraliza o container
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.darkColor};
  padding: ${theme.spacing};
  position: fixed;
  width: 100%;
  z-index: 50;
  border-radius: ${theme.borderRadius};
  max-width: ${theme.maxWidth};
  margin: 0 auto;

  .logo img {
    width: ${theme.iconSize};
    height: ${theme.iconSize};
    border-radius: 50%;
  }

  .links-content {
    display: flex;
    gap: 20px;
    transition: all 0.3s ease;

    ul {
      display: flex;
      gap: 20px;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        font-size: 1rem;
        font-weight: bold;
        color: ${theme.lightColor};

        a {
          color: inherit;
          text-decoration: none;
          font-size: 16px;

          &:hover {
            color: ${theme.primaryColor};
            transition: color 0.3s ease;
          }
        }
      }
    }
  }

  .hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;

    div {
      background-color: ${theme.lightColor};
      height: ${theme.hamburgerSize};
      width: ${theme.hamburgerSize};
      border-radius: 3px;
    }
  }

  .download-cv {
    background-color: ${theme.darkColor};
    color: ${theme.primaryColor};
    padding: 10px 20px;
    border: 2px solid ${theme.primaryColor};
    border-radius: 20px;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: ${theme.primaryColor};
      color: ${theme.darkColor};
    }
  }

  ${device.small} {
    flex-direction: column;
    padding: 16px;

    .logo {
      display: none;
    }

    .links-content {
      display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      width: 100%;

      ul {
        flex-direction: column;
        gap: 10px;
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

    .hamburger-menu {
      display: flex;
    }
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing};
  width: 100%;
  max-width: ${theme.maxWidth};
  margin: 0 auto; // Centraliza o container
  padding: ${theme.imagePadding} 0; // Adiciona padding para evitar que a imagem encoste nas bordas

  .top-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .top-links {
      display: flex;
      align-items: center;
      gap: ${theme.spacing};

      a {
        color: #fff;
      }
    }

    .social-media {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 2px solid ${theme.borderColor};
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

  ${device.large} {
    padding: 80px 0;
    margin-top: 180px;

    .top-content {
      align-items: flex-start;
    }
  }

  ${device.medium} {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .top-content {
      align-items: center;
    }
  }

  ${device.small} {
    flex-direction: column;
    padding: 20px;
    margin-top: 120px;

    .top-content {
      align-items: center;
    }

    .icons {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 120px;
  padding: 20px;

  ${device.large} {
    margin-top: 140px;
    padding: 40px;
  }

  ${device.small} {
    margin-top: 80px;
    padding: 15px;
  }
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
      gap: ${theme.spacing};

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
      border: 2px solid ${theme.borderColor};
      border-radius: 4px;

      &:hover {
        opacity: 0.8;
      }
    }

    .icons {
      &:hover {
        transition: transform 300ms ease;
        transform: scale(1.05);
      }
    }

    p {
      margin-top: 40px;
    }
  }

  ${device.small} {
    .developer {
      font-size: 1.1rem;

      .top-links {
        gap: 16px;
      }

      p {
        margin-top: 30px;
      }
    }
  }
`;
