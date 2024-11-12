import React, { useState } from "react";
import { Link, Element } from "react-scroll";

import { motion } from "framer-motion";

// icons
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoMenu,
  IoClose,
  IoMail,
} from "react-icons/io5";

// components
import H1 from "../../components/Title";
import { useWindowSizeIcons } from "../../components/windowSizeIcons";
import { ProjectsPage } from "../../components/SlideProjects";

// pages
import { PageTechs } from "../PageTechs";
import { PageAboutMe } from "../PageAboutMe";

// archives
import PhotoProfire from "../../assets/profire.jpg";
import HomeDark from "../../assets/homeDark.png";
import SergioResume from "../../assets/resume.pdf";

// styles
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // control menu close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Header Section */}
      <HeaderContainer>
        <Header isopen={isMenuOpen ? "true" : undefined}>
          <Link to="home" smooth={true} duration={500} offset={-80}>
            <div className="logo">
              <img src={PhotoProfire} alt="profire" />
            </div>
          </Link>

          <HamburgerIcon
            isopen={isMenuOpen ? "true" : undefined}
            onClick={toggleMenu}
          >
            {!isMenuOpen ? <IoMenu size={30} /> : ""}
          </HamburgerIcon>

          <NavLinks isopen={isMenuOpen ? "true" : undefined}>
            <IoClose className="close-icon" size={30} onClick={toggleMenu} />
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
          </NavLinks>

          <a href={SergioResume} className="download-cv">
            Download Resume
          </a>
        </Header>
      </HeaderContainer>

      {/* Seção HOME */}
      <Element name="home">
        <TopContainer>
          <motion.div
            className="top-content"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <H1>Software Developer</H1>

            {/* Links sociais */}
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-links">
                    <social.icon className="icons" size={iconSize} />
                  </div>
                </motion.a>
              ))}
            </SocialLinks>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={cardVariants}
            whileInView="visible"
          >
            <img src={HomeDark} className="home-dark-image" alt="icon" />
          </motion.div>
        </TopContainer>
      </Element>

      {/* Seção ABOUT ME */}
      <Element name="aboutme">
        <PageAboutMe />
      </Element>

      {/* Seção PROJECTS */}
      <Element name="projects">
        <ProjectsPage />
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
            {socialLinks.map((social, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                href={social.href}
              >
                <div className="social-media">
                  <social.icon className="icons" size={45} />
                  <span>{social.label}</span>
                </div>
              </a>
            ))}
          </div>

          <p> ©2024 Developed by Sérgio Oliveira.</p>
        </Footer>
      </Element>
    </>
  );
}
