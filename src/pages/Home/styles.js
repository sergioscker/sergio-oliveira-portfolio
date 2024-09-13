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
  margin: 0 auto;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing};
  margin-bottom: ${theme.iconSize};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Adicionando sombra para destacar o header
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${theme.maxWidth};
  background-color: ${theme.darkColor};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing};
  margin: 0 auto;

  .logo img {
    width: ${theme.iconSize};
    height: ${theme.iconSize};
    border-radius: 50%;

    ${device.small} {
      display: none; /* Oculta a foto de perfil em telas pequenas */
    }
  }

  ${device.small} {
    flex-direction: column;
    align-items: center;

    .links-content {
      display: none;
    }
  }
`;

// Ícone de hambúrguer para menu em telas pequenas
export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  ${device.small} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

// Estilos para os links de navegação (menu lateral flexbox para telas pequenas)
export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;

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

  /* Menu adaptativo para telas pequenas */
  ${device.small} {
    display: ${({ isopen }) => (isopen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: ${theme.darkColor};
    width: 100%;
    padding: 20px 0;

    li {
      font-size: 1.5rem;
    }

    .download-cv {
      &:hover {
        background-color: ${theme.primaryColor};
        color: ${theme.darkColor};
      }
    }
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: ${theme.maxWidth};
  padding: 60px 0;
  margin: 0 auto;

  .top-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .top-links {
      display: flex;
      align-items: center;
      gap: ${theme.spacing};

      a {
        color: ${theme.lightColor};
      }
    }

    .social-media {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 24px;
      border: 2px solid ${theme.borderColor};
      border-radius: 10px;

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

  .home-dark-image {
    max-width: 100%;
    height: auto;
  }

  ${device.medium} {
    padding: 40px 0;

    .home-dark-image {
      max-width: 80%; /* Ajusta a imagem em telas médias */
    }
  }

  ${device.small} {
    flex-direction: column;
    padding: 20px 0;

    .top-content {
      .top-links {
        flex-direction: column;
        gap: 10px;
      }

      .social-media {
        flex-direction: column;
        gap: 8px;
        padding: 16px;
      }
    }

    .home-dark-image {
      max-width: 100%; /* Ajusta a imagem para caber em telas pequenas */
    }
  }
`;

export const Section = styled.section`
  margin-top: 120px;
  padding: 20px;

  ${device.medium} {
    margin-top: 80px;
    padding: 15px;
  }

  ${device.small} {
    margin-top: 60px;
    padding: 10px;
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
  color: ${theme.lightColor};

  .developer {
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;

    .top-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${theme.spacing};
      flex-wrap: wrap; /* Permite que os links quebrem para a próxima linha se não houver espaço suficiente */

      a {
        color: ${theme.lightColor};
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;

        &:hover {
          color: ${theme.primaryColor};
        }
      }
    }

    .social-media,
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 10px;
      font-size: 1rem;
      font-weight: 600;

      &:hover {
        opacity: 0.8;
        color: ${theme.primaryColor};
      }

      .icons {
        transition: transform 300ms ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    p {
      margin-top: 20px;
      font-size: 1rem;
    }
  }

  /* Media Queries */
  ${device.medium} {
    padding: 15px;

    .developer {
      font-size: 1.2rem;

      .top-links {
        gap: 16px;
      }

      p {
        margin-top: 15px;
      }
    }
  }

  ${device.small} {
    padding: 10px;

    .developer {
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;

      .top-links {
        flex-direction: column;
        gap: 10px;
        width: 100%;
      }

      p {
        margin-top: 10px;
      }

      .social-media,
      span {
        flex-direction: column;
        gap: 8px;
        padding: 8px;
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.lightColor};
    font-size: ${(props) => (props.size ? `${props.size}px` : "24px")};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.primaryColor};
    }
  }

  /* Media Queries */
  ${device.medium} {
    gap: 15px;

    a {
      font-size: ${(props) =>
        props.size
          ? `${props.size * 0.9}px`
          : "22px"}; /* Diminuir o tamanho do ícone em telas médias */
    }
  }

  ${device.small} {
    gap: 10px;

    a {
      font-size: ${(props) =>
        props.size
          ? `${props.size * 0.8}px`
          : "20px"}; /* Diminuir ainda mais o tamanho do ícone em telas pequenas */
    }
  }
`;
