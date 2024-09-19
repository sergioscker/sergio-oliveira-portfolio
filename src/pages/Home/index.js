import { useState } from "react";
import { Link, Element } from "react-scroll";

import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoMenu,
  IoClose,
  IoMail,
} from "react-icons/io5";

import H1 from "../../components/Title";
import { useWindowSizeIcons } from "../../components/windowSizeIcons";

import { PageAboutMe } from "../PageAboutMe";
import { PageProjects } from "../PageProjects";
import { PageTechs } from "../PageTechs";

import PhotoProfire from "../../assets/profire-photo.png";
import HomeDark from "../../assets/homeDark.png";
import SergioResume from "../../assets/sergio-resume.pdf";

import {
  Header,
  HeaderContainer,
  HamburgerIcon,
  NavLinks,
  Footer,
  TopContainer,
  SocialLinks,
} from "./styles";

export function Home() {
  const { width } = useWindowSizeIcons();
  const iconSize = width > 768 ? 50 : 32; // Ajuste do tamanho dos ícones baseado na largura da tela
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const navLinks = [
    { name: "HOME", to: "home" },
    { name: "ABOUT ME", to: "aboutme" },
    { name: "PROJECTS", to: "projects" },
    { name: "SKILLS", to: "skills" },
    { name: "CONTACT", to: "contact" },
  ];

  const socialLinks = [
    {
      href: "https://pt.linkedin.com/in/sergioliveiira",
      icon: IoLogoLinkedin,
      label: "sergioliveiira",
    },
    {
      href: "https://wa.link/up0k32",
      icon: IoLogoWhatsapp,
      label: "(+351)939274154",
    },
    {
      href: "https://github.com/sergioscker",
      icon: IoLogoGithub,
      label: "sergioscker",
    },

    {
      href: "mailto:sergiowallace11@hotmail.com",
      icon: IoMail,
      label: "email",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Função para abrir/fechar o menu
  };

  return (
    <>
      {/* Header Section */}
      <HeaderContainer>
        <Header isopen={isMenuOpen}>
          {/* Logo */}
          <Link to="home" smooth={true} duration={500} offset={-80}>
            <div className="logo">
              <img src={PhotoProfire} alt="profire" />
            </div>
          </Link>

          {/* Ícone de hambúrguer para telas pequenas */}
          <HamburgerIcon onClick={toggleMenu}>
            {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </HamburgerIcon>

          {/* Links de navegação, exibidos ou ocultados conforme o estado do menu */}
          <NavLinks isopen={isMenuOpen}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <a href={SergioResume} className="download-cv">
              Download Resume
            </a>
          </NavLinks>
        </Header>
      </HeaderContainer>

      {/* Seção HOME */}
      <Element name="home">
        <TopContainer>
          <div className="top-content">
            <H1>Software Developer</H1>

            {/* Links sociais */}
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href}>
                  <div className="social-links">
                    <social.icon className="icons" size={iconSize} />
                  </div>
                </a>
              ))}
            </SocialLinks>
          </div>

          <div>
            <img src={HomeDark} className="home-dark-image" alt="icon" />
          </div>
        </TopContainer>
      </Element>

      {/* Seção ABOUT ME */}
      <Element name="aboutme">
        <PageAboutMe />
      </Element>

      {/* Seção PROJECTS */}
      <Element name="projects">
        <PageProjects />
      </Element>

      {/* Seção SKILLS */}
      <Element name="skills">
        <PageTechs />
      </Element>

      {/* Seção CONTACT */}
      <Element name="contact">
        <Footer>
          <h1>Contact</h1>
          <div className="developer">
            {/* Links sociais no footer */}
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href}>
                <div className="social-media">
                  <social.icon className="icons" size={45} />
                  <span>{social.label}</span>
                </div>
              </a>
            ))}

            <p> ©2024 Developed by Sérgio Oliveira.</p>
          </div>
        </Footer>
      </Element>
    </>
  );
}
