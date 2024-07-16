import PhotoProfire from "../../assets/profire-photo.png";
import Github from "../../assets/logo-github.svg";
import LinkedIn from "../../assets/logotipo-do-linkedin.png";
import WhatsApp from "../../assets/whatsapp.png";

import H1 from "../../components/Title";
import { PageAboutMe } from "../PageAboutMe";
import { PageProjects } from "../PageProjects";
import { PageTechs } from "../PageTechs";

import { ContainerMain, Header, Footer } from "./styles";

export function Home() {
  return (
    <ContainerMain>
      <Header>
        <div>
          <img src={PhotoProfire} alt="profire" />
        </div>

        <a href="https://www.linkedin.com/in/sergioliveira-developer/">
          LinkedIn
        </a>
        <a href="https://github.com/sergioliveira-developer">GitHub</a>
        <a href="#projects">Projects</a>
      </Header>

      <H1>
        Sérgio Oliveira
        <div>Developer Full-Stack</div>
      </H1>

      <div>
        <PageProjects />
      </div>

      <PageTechs />

      <PageAboutMe />

      <Footer>
        <div className="links-footer">
          <a href="https://www.linkedin.com/in/sergioliveira-developer/">
            <img src={LinkedIn} alt="logo-linkedIn" className="social-media" />
          </a>

          <a href="https://wa.link/up0k32">
            <img src={WhatsApp} alt="logo-whatsapp" className="social-media" />
          </a>

          <a href="https://github.com/sergioliveira-developer">
            <img src={Github} alt="logo-github" className="social-media" />
          </a>
        </div>

        <div className="developer">
          <p> © Desenvolvido por Sérgio Oliveira.</p>
        </div>
      </Footer>
    </ContainerMain>
  );
}
