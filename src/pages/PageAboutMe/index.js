import { MainContainer } from "../Home/styles";
import { AboutContainer } from "./styles";

export const PageAboutMe = () => {
  return (
    <AboutContainer>
      <MainContainer>
        <div>
          <h1>About me</h1>

          <h5 className="text">
            Olá, sou Sérgio Oliveira, um entusiasta de tecnologia em início de
            carreira como Desenvolvedor de Software. Brasileiro, que há 2 anos
            trocou o clima quente do Rio de Janeiro pelo inverno Europeu. Embora
            ainda esteja dando meus primeiros passos nesse universo, minha
            paixão por aprender e superar desafios é o que me impulsiona todos
            os dias.
          </h5>

          <h5 className="text">
            Recentemente, comecei a explorar o mundo do desenvolvimento web, com
            foco em <span>JavaScript, React.js e Node.js</span>. Estou constantemente em
            busca de novos conhecimentos e adoro mergulhar em projetos que me
            façam sair da zona de conforto, pois acredito que é através dos
            desafios que realmente crescemos e nos tornamos melhores
            profissionais. Nos últimos meses, desenvolvi alguns projetos no
            GitHub que me ajudaram a aplicar na prática os conceitos que venho
            estudando. Um deles foi este portfólio pessoal, onde criei todo o
            código utilizando ReactJS, demonstrando minha capacidade de
            construir interfaces modernas e responsivas.
          </h5>

          <h5 className="text">
            Tenho me dedicado bastante em projetos com ênfase na rotina
            profissional de um programador no mercado de trabalho para alcançar
            uma oportunidade de demonstrar com trabalho árduo o quanto posso
            evoluir ainda mais meus conhecimentos e colaborar como equipe numa
            empresa.
          </h5>
        </div>
      </MainContainer>
    </AboutContainer>
  );
};
