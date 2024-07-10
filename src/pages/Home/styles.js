import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #011627;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 18px;
  border: 2px solid #fff;
  box-shadow: 1px 1px 10px 1px #101010;

  img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
  }

  a {
    font-size: 25px;
    font-weight: 600;
    color: #68a9ff;
    text-decoration: none;

    &:hover {
      color: #c51111;
      font-size: 28px;
      transition: 0.5s ease-in-out;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    img {
      display: none;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 5px;

  div {
    display: flex;
    gap: 8px;
  }

  img {
    overflow: clip;
    height: 60px;
    width: 60px;
    margin: 3px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  padding: 20px;

  .links-footer {
    display: flex;
    gap: 10px;
  }

  .social-media:hover {
    opacity: 0.8;
  }

  .social-media:active {
    opacity: 0.4;
  }

  .social-media {
    width: 2.5rem;
    background-color: #fff;
    border-radius: 4px;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    padding: 20px;
  }

  .developer {
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
