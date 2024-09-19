import MarioBross from "../../assets/mario-bross.png";
import ConverterCoins from "../../assets/convert-money.png";
import JoKenPo from "../../assets/jo-ken-po.png";
import UsersOffice from "../../assets/users-office.png";
import MenuBurgers from "../../assets/map-reduce-filter.png";
import EasyShopping from "../../assets/easy-shopping.png";
import DevBurger from "../../assets/dev-burger.png";
import TechSolution from "../../assets/tech-solutions.png";
import DevBills from "../../assets/dev-bills.png";

import { Projects } from "../../components/Projects";

import { ProjectContainer } from "./styles";

import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoDocker,
} from "react-icons/io5";

import { TbBrandMongodb, TbBrandTypescript } from "react-icons/tb";

const techData = [
  [
    { icon: <IoLogoJavascript size={35} /> },
    { icon: <IoLogoHtml5 size={35} /> },
    { icon: <IoLogoCss3 size={35} /> },
  ],
  [
    { icon: <IoLogoJavascript size={35} /> },
    { icon: <IoLogoReact size={35} /> },
    { icon: <IoLogoHtml5 size={35} /> },
  ],
  [
    { icon: <TbBrandMongodb size={35} /> },
    { icon: <IoLogoJavascript size={35} /> },
    { icon: <IoLogoReact size={35} /> },
    { icon: <IoLogoDocker size={35} /> },
    { icon: <IoLogoHtml5 size={35} /> },
  ],

  [
    { icon: <IoLogoJavascript size={35} /> },
    { icon: <IoLogoHtml5 size={35} /> },
    { icon: <TbBrandMongodb size={35} /> },
    { icon: <TbBrandTypescript size={35} /> },
  ],
];

export const PageProjects = () => {
  return (
    <ProjectContainer>
      <Projects
        src={TechSolution}
        name="Tech Solution"
        description=""
        hrefProject="https://tech-solutions-kappa.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/tech-solutions"
        techs={techData[1]}
      />
      <Projects
        src={DevBurger}
        name="DevBurger"
        description=""
        hrefProject=""
        hrefCode="https://github.com/sergioliveira-developer/DevBurger"
        techs={techData[2]}
      />
      <Projects
        src={DevBills}
        name="Dev Bills"
        description=""
        hrefProject=""
        hrefCode="https://github.com/sergioliveira-developer/dev-bills"
        techs={techData[3]}
      />
      <Projects
        src={UsersOffice}
        name="Users Office"
        hrefProject="https://users-office.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Users-Office"
        techs={techData[1]}
      />
      <Projects
        src={MarioBross}
        name="Mario Builder"
        hrefProject="https://mariobross-three.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Mario-Bross"
        techs={techData[0]}
      />

      <Projects
        src={ConverterCoins}
        name="Convert Money"
        hrefProject="https://converter-coins.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Convert-Money"
        techs={techData[0]}
      />

      <Projects
        src={JoKenPo}
        name="Game JoKenPô"
        hrefProject="https://project-jo-ken-po.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Game-Jokenpo"
        techs={techData[0]}
      />

      <Projects
        src={MenuBurgers}
        name="Burgers"
        hrefProject="https://menu-burguers.vercel.app"
        hrefCode="https://github.com/sergioscker/Menu-Burgers"
        techs={techData[0]}
      />

      <Projects
        src={EasyShopping}
        name="Easy Shopping"
        hrefProject="https://easy-shopping-pied.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Easy-Shopping"
        techs={techData[0]}
      />
    </ProjectContainer>
  );
};
