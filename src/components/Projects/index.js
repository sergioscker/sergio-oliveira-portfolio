import { ContainerProject } from './styles';

export const Projects = ({
  src,
  name,
  description,
  hrefProject,
  hrefCode,
  techs,
}) => {
  return (
    <ContainerProject>

      <div className='cards'>
        <img className='img' src={src} alt='project' />

        <div className='description'>
          <h5> {name} </h5>
          <p>{description}</p>


          <div className='container-techs'>
            {techs.map((tech, index) => (
              <div key={index}>
                {tech.icon}
              </div>
            ))}
          </div>

          <div className='container-buttons'>
            <button className='button'>
              <a href={hrefProject}>
                Visualizar Projeto
              </a>
            </button>

            <button className='button'>
              <a href={hrefCode}>
                Visualizar Código
              </a>
            </button>
          </div>
        </div>
      </div>

    </ContainerProject >
  );
};


