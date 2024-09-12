import { MainContainer } from "../../pages/Home/styles";
import { ContainerProject } from "./styles";

export const Projects = ({ src, name, hrefProject, hrefCode, techs }) => {
  return (
    <ContainerProject>
      <MainContainer>
        <div className="cards">
          <img className="img" src={src} alt="project" />

          <div className="description">
            <h5> {name} </h5>

            <div className="container-techs">
              {techs.map((tech, index) => (
                <div key={index}>{tech.icon}</div>
              ))}
            </div>

            <div className="container-buttons">
              <button className="button">
                <a href={hrefProject}>Visualizar Projeto</a>
              </button>

              <button className="button">
                <a href={hrefCode}>Visualizar Código</a>
              </button>
            </div>
          </div>
        </div>
      </MainContainer>
    </ContainerProject>
  );
};
