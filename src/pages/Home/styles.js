import styled from "styled-components";

// Variáveis de tema para cores e espaçamentos
const theme = {
  primaryColor: "#4a8fff",
  darkColor: " #1f1f1f",
  lightColor: "#cccccc",
  borderColor: "rgb(30, 59, 139)",
  spacing: "20px",
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
  padding: 0 36px;
  margin: 0 auto;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing};
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
  position: fixed;
  z-index: 50;

  .logo img {
    width: ${theme.iconSize};
    height: ${theme.iconSize};
    border-radius: 50%;

    ${device.small} {
      display: none; /* Oculta a foto de perfil em telas pequenas */
    }
  }

  ${device.medium} {
    max-width: max-content;

    .logo {
      display: none;
    }
  }

  ${device.small} {
    flex-direction: column;
    align-items: stretch;
    max-width: 350px;
    padding: 15px 0;
    margin-top: 70px;

    .links-content {
      display: none;
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  padding: 8px 0;
  cursor: pointer;

  ${device.small} {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 51; /* Garante que o ícone de fechar fica acima do menu */

    svg {
      width: 24px;
      height: 24px;
      color: ${theme.lightColor};
    }
  }
`;

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

  ${device.small} {
    display: ${({ isopen }) => (isopen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 14px 0;

    li {
      font-size: 18px;
    }

    .download-cv {
      display: none;
    }
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${theme.maxWidth};
  padding: 80px 0;
  margin: 0 auto;
  min-height: 90vh;
  overflow: hidden;

  .top-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-dark-image {
    max-width: 100%;
    height: auto;
  }

  ${device.medium} {
    padding: 100px 0;

    .home-dark-image {
      max-width: 100%;
      padding: 0 10px;
    }
  }

  ${device.small} {
    flex-direction: column;
    padding: 70px 0;

    .home-dark-image {
      padding: 20px;
      max-width: 100%;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 80px;
  color: ${theme.lightColor};
  min-height: 100vh;

  h1 {
    margin-top: 50px;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #007bff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }

  .developer {
    display: flex;
    flex-direction: column;

    .social-media,
    span,
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 10px;
      font-size: 24px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;

      &:hover {
        color: ${theme.primaryColor};
      }

      .icons {
        transition: transform 300ms ease;

        &:hover {
          transform: scale(1.08);
          color: ${theme.primaryColor};
        }
      }
    }

    p {
      font-size: 32px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  ${device.medium} {
    padding: 15px;

    .developer {
      font-size: 1.2rem;

      .top-links {
        gap: 16px;
      }

      p {
        font-size: 28px;
        text-align: center;
        padding: 0 10px;
        margin-top: 15px;
      }
    }
  }

  ${device.small} {
    padding: 50px;

    h1 {
      margin-top: 70px;
    }

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
        font-size: 26px;
        margin-top: 10px;
        text-align: center;
        padding: 0 10px;
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

  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 24px;
    border: 2px solid ${theme.borderColor};
    border-radius: 10px;

    &:hover {
      opacity: 0.8;
      border-color: ${theme.primaryColor};
    }

    .icons {
      color: #fff;
      transition: transform 300ms ease;

      &:hover {
        transform: scale(1.08);
      }
    }
  }

  ${device.medium} {
    gap: 12px;
    margin-bottom: 20px;

    .social-links {
      padding: 25px;
    }
  }

  ${device.small} {
    .social-links {
      padding: 20px;
      margin-bottom: 10px;
    }
  }
`;
