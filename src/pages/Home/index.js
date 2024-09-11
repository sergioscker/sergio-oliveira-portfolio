import { Link, Element } from "react-scroll";

import PhotoProfire from "../../assets/profire-photo.png";

import { IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp } from "react-icons/io5";

import H1 from "../../components/Title";
import { useWindowSizeIcons } from "../../components/windowSizeIcons";
import { PageAboutMe } from "../PageAboutMe";
import { PageProjects } from "../PageProjects";
import { PageTechs } from "../PageTechs";

import HomeDark from "../../assets/homeDark.png";
import SergioResume from "../../assets/sergio-resume.pdf";

import {
  Header,
  Footer,
  TopContainer,
  Section,
  HeaderContainer,
} from "./styles";

export function Home() {
  const { width } = useWindowSizeIcons();
  const iconSize = width > 768 ? 32 : 32;

  return (
    <>
      <HeaderContainer>
        <Header>
          <Link to="home" smooth={true} duration={500} offset={-100}>
            <div className="logo">
              <img src={PhotoProfire} alt="profire" />
            </div>
          </Link>

          <nav className="links-content">
            <ul>
              <li>
                <Link to="home" smooth={true} duration={500} offset={-100}>
                  HOME
                </Link>
              </li>

              <li>
                <Link to="aboutme" smooth={true} duration={500} offset={-100}>
                  ABOUT ME
                </Link>
              </li>

              <li>
                <Link to="projects" smooth={true} duration={500} offset={-100}>
                  PROJECTS
                </Link>
              </li>

              <li>
                <Link to="contact" smooth={true} duration={500} offset={-100}>
                  SKILLS
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <a href={SergioResume} className="download-cv">
              Download Resume
            </a>
          </div>
        </Header>
      </HeaderContainer>

      {/* Seção HOME */}
      <Element name="home">
        <TopContainer>
          <div className="top-content">
            <H1>Software Developer</H1>

            <div className="top-links">
              <a href="https://pt.linkedin.com/in/sergioliveiira">
                <div className="social-media">
                  <IoLogoLinkedin className="icons" size={iconSize} />
                </div>
              </a>

              <a href="https://wa.link/up0k32">
                <div className="social-media">
                  <IoLogoWhatsapp className="icons" size={iconSize} />
                </div>
              </a>

              <a href="https://github.com/sergioscker">
                <div className="social-media">
                  <IoLogoGithub className="icons" size={iconSize} />
                </div>
              </a>
            </div>
          </div>

          <div>
            <img src={HomeDark} alt="icon" />
          </div>
        </TopContainer>
      </Element>

      {/* Seção ABOUT ME */}
      <Element name="aboutme">
        <Section>
          <PageAboutMe />
        </Section>
      </Element>

      {/* Seção PROJECTS */}
      <Element name="projects">
        <Section>
          <PageProjects />
        </Section>
      </Element>

      <Element name="contact">
        <PageTechs />

        <Footer>
          <div className="developer">
            <div className="top-links">
              <a href="https://pt.linkedin.com/in/sergioliveiira">
                <div className="social-media">
                  <IoLogoLinkedin className="icons" size={iconSize} />
                </div>
              </a>

              <a href="https://wa.link/up0k32">
                <div className="social-media">
                  <IoLogoWhatsapp className="icons" size={iconSize} />
                </div>
              </a>

              <a href="https://github.com/sergioscker">
                <div className="social-media">
                  <IoLogoGithub className="icons" size={iconSize} />
                </div>
              </a>
            </div>

            <p> ©2024 Developed by Sérgio Oliveira.</p>
          </div>
        </Footer>
      </Element>
    </>
  );
}
