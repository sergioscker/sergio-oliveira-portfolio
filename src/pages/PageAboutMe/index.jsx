import { motion } from "framer-motion";
import { MainContainer } from "../Home/styles";
import { AboutContainer } from "./styles";

export const PageAboutMe = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial
    visible: { opacity: 1, y: 0 }, // Estado final
  };

  return (
    <AboutContainer>
      <MainContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h1>About Me</h1>

          <motion.h5
            className="text"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Olá, sou Sérgio Oliveira, um Desenvolvedor de Software em início de
            carreira, que trocou o calor vibrante do Rio de Janeiro pelo inverno
            europeu em busca de novas oportunidades. Sou apaixonado por
            tecnologia e inovação, e tenho me aprofundado em devenvolvimento
            full stack com ênfase em <span>JavaScript, React.js, TypeScript, Node.js...</span> buscando
            sempre o aperfeiçoamento contínuo.
          </motion.h5>

          <motion.h5
            className="text"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Nos últimos meses, me dediquei ao desenvolvimento de diversos
            projetos, que estão disponíveis neste Porfólio e GitHub, onde pude
            aplicar na prática os conhecimentos adquiridos. Um dos meus projetos
            mais significativos é este portfólio pessoal, que desenvolvi
            completamente em ReactJS. Este trabalho não apenas demonstra minha
            capacidade de criar interfaces modernas e responsivas, mas também
            reflete meu comprometimento com a experiência do usuário e a
            qualidade do código.
          </motion.h5>

          <motion.h5
            className="text"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Acredito firmemente que a tecnologia tem o poder de transformar
            vidas e negócios, e estou entusiasmado em fazer parte dessa mudança.
            Minha meta é encontrar uma oportunidade no mercado de trabalho que
            me permita aplicar o que aprendi, ao mesmo tempo em que aprendo com
            profissionais experientes e colaboro para o crescimento da equipe.
          </motion.h5>

          <motion.h5
            className="text"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Se você está à procura de um profissional motivado, com sede de
            conhecimento e uma verdadeira paixão pela tecnologia, adoraria a
            oportunidade de conversar sobre como posso agregar valor à sua
            equipe. Vamos juntos transformar ideias em realidade e criar
            soluções impactantes!
          </motion.h5>
        </motion.div>
      </MainContainer>
    </AboutContainer>
  );
};
