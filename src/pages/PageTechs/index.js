import { Techs } from "../../components/Techs/Techs";

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
import { useWindowSizeIcons } from "../../components/useWindowSizeicons/useWindowSizeicon";

export const PageTechs = () => {
  const { width } = useWindowSizeIcons();
  const iconSize = width > 768 ? 55 : 28; // Ajuste os valores conforme necessário

  const techData = [
    { icon: <IoLogoJavascript size={iconSize} />, name: "JavaScript" },
    { icon: <IoLogoHtml5 size={iconSize} />, name: "Html5" },
    { icon: <IoLogoCss3 size={iconSize} />, name: "Css3" },
    { icon: <IoLogoNodejs size={iconSize} />, name: "Nodejs" },
    { icon: <TbBrandTypescript size={iconSize} />, name: "TypeScript" },
    { icon: <IoLogoReact size={iconSize} />, name: "React" },
    { icon: <IoLogoReact size={iconSize} />, name: "React Native" },
    { icon: <TbBrandVite size={iconSize} />, name: "Vite" },
    { icon: <FaGitAlt size={iconSize} />, name: "Git" },
    { icon: <IoLogoSass size={iconSize} />, name: "Sass" },
    { icon: <IoLogoDocker size={iconSize} />, name: "Docker" },
  ];

  return (
    <ContainerTools>
      <Techs title="Language" techs={techData.slice(0, 3)} />
      <Techs title="Tecnologies" techs={techData.slice(3)} />
    </ContainerTools>
  );
};
