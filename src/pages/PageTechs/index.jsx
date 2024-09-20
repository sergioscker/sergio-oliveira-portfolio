import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoSass,
  IoLogoDocker,
} from "react-icons/io5";

import { FaGitAlt } from "react-icons/fa6";
import { TbBrandVite, TbBrandTypescript } from "react-icons/tb";

import { ContainerTools } from "./styles";
import { useWindowSizeIcons } from "../../components/windowSizeIcons";
import { Techs } from "../../components/Techs/Techs";

import { MainContainer } from "../Home/styles";

export const PageTechs = () => {
  const { width } = useWindowSizeIcons();
  const iconSize = width > 768 ? 55 : 35; // Ajuste os valores conforme necessário

  const techData = [
    { icon: <IoLogoReact size={iconSize} />, name: "React" },
    { icon: <IoLogoJavascript size={iconSize} />, name: "JavaScript" },
    { icon: <TbBrandTypescript size={iconSize} />, name: "TypeScript" },
    { icon: <IoLogoHtml5 size={iconSize} />, name: "Html5" },
    { icon: <IoLogoCss3 size={iconSize} />, name: "Css3" },
    { icon: <IoLogoSass size={iconSize} />, name: "Sass" },
    { icon: <IoLogoNodejs size={iconSize} />, name: "Nodejs" },
    { icon: <TbBrandVite size={iconSize} />, name: "Vite" },
    { icon: <FaGitAlt size={iconSize} />, name: "Git" },
    { icon: <IoLogoDocker size={iconSize} />, name: "Docker" },
  ];

  return (
    <ContainerTools>
      <MainContainer>
        <Techs title="Technologies" techs={techData} />
      </MainContainer>
    </ContainerTools>
  );
};
