import styled from "styled-components";

// Variáveis de tema para cores e espaçamentos
const theme = {
  primaryColor: "#4a8fff",
  darkColor: " #1f1f1f",
  lightColor: "#cccccc",
  borderColor: "rgb(30, 59, 139)",
  spacing: "20px",
  iconSize: "55px",
  borderRadius: "32px",
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
  padding: 0 22px;
  margin: 0 auto;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 12px;

  ${device.medium} {
    padding: 12px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${theme.maxWidth};
  background-color: ${theme.darkColor};
  border-radius: ${theme.borderRadius};
  border: 1px solid #3d3d3d6e;
  padding: ${theme.spacing};
  margin: 0 auto;
  gap: 24px;
  position: fixed;
  z-index: 50;

  ${device.medium} {
    width: 95%;
    padding: 25px;
  }

  ${device.small} {
    width: 90%;
    border-radius: 80px;
  }

  .logo img {
    width: ${theme.iconSize};
    height: ${theme.iconSize};
    border-radius: 50%;

    ${device.medium} {
      display: none;
    }

    ${device.small} {
      display: none;
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

    ${device.medium} {
      padding: 10px;
    }

    ${device.small} {
      display: flex;
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    color: ${theme.primaryColor};
  }

  ${device.medium} {
    display: none;
  }

  ${device.small} {
    display: flex;
    justify-content: space-between;

    svg {
      width: 28px;
      height: 28px;
      color: ${theme.lightColor};
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 100;
  transition: transform 0.3s ease;

  .close-icon {
    display: none; /* Oculta o ícone de fechar em telas grandes */
  }

  li {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.lightColor};

    a {
      color: inherit;
      text-decoration: none;
      font-size: 1.2rem;

      &:hover {
        color: ${theme.primaryColor};
        transition: color 0.3s ease;
      }
    }
  }

  ${device.small} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    transform: translateX(
      ${({ isopen }) => (isopen ? "0" : "-100%")}
    ); /* Move para fora da tela se não estiver aberto */

    .close-icon {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      color: ${theme.lightColor};

      &:hover {
        color: ${theme.primaryColor};
      }
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
    flex-direction: column;
    padding: 40px 0;
    min-height: 50vh;
  }

  ${device.small} {
    flex-direction: column;
    padding: 70px 0;

    .home-dark-image {
      padding: 20px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: ${theme.lightColor};
  min-height: 80vh;
  width: 100%;
  padding: 100px 0;

  h1 {
    font-size: 2.5rem;
    background: linear-gradient(45deg, #0056b3, #007bff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  .developer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

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
  }

  p {
    font-size: 26px;
    color: rgba(255, 255, 255, 0.6);
    padding: 20px;

    ${device.small} {
      text-align: center;
    }
  }

  ${device.medium} {
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
    padding: 30px;

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
    }
  }

  ${device.medium} {
    gap: 12px;
    margin-bottom: 20px;

    .social-links {
      padding: 18px;
      margin-bottom: 30px;
    }
  }

  ${device.small} {
    .social-links {
      padding: 18px;
      margin-bottom: 15px;
    }
  }
`;
