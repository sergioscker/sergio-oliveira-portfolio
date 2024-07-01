import MarioBross from '../../assets/mario-bross.png';
import ConverterCoins from '../../assets/convert-money.png';
import JoKenPo from '../../assets/jo-ken-po.png';
import UsersOffice from '../../assets/users-office.png';
import MenuBurgers from '../../assets/map-reduce-filter.png';
import EasyShopping from '../../assets/easy-shopping.png';

import { Projects } from '../../components/Projects';

import {
  Container,
} from './styles';

import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
} from 'react-icons/io5';

const techData = [
  [
    { icon: <IoLogoJavascript size={40} /> },
    { icon: <IoLogoHtml5 size={40} /> },
    { icon: <IoLogoCss3 size={40} /> },
  ],
  [
    { icon: <IoLogoJavascript size={40} /> },
    { icon: <IoLogoReact size={40} /> },
    { icon: <IoLogoCss3 size={40} /> },
    { icon: <IoLogoHtml5 size={40} /> },
  ],
];

export const PageProjects = () => {
  return (

    <Container>
      <Projects
        src={MarioBross}
        name="Mario Builder"
        description=""
        hrefProject="https://mariobross-three.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Mario-Bross"
        techs={techData[0]}
      />
      <Projects
        src={ConverterCoins}
        name="Convert Money"
        description=""
        hrefProject="https://converter-coins.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Convert-Money"
        techs={techData[0]}
      />
      <Projects
        src={JoKenPo}
        name="Game JoKenPô"
        description=""
        hrefProject="https://project-jo-ken-po.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Game-Jokenpo"
        techs={techData[0]}
      />
      <Projects
        src={UsersOffice}
        name="Users Office"
        description=""
        hrefProject="https://users-office.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Users-Office"
        techs={techData[1]}
      />
      <Projects
        src={MenuBurgers}
        name="Burgers"
        description=""
        hrefProject="https://sergioliveira-developer.github.io/Ementa-Burger/"
        hrefCode="https://github.com/sergioliveira-developer/Ementa-Burger"
        techs={techData[0]}
      />
      <Projects
        src={EasyShopping}
        name="Easy Shopping"
        description=""
        hrefProject="https://easy-shopping-pied.vercel.app/"
        hrefCode="https://github.com/sergioliveira-developer/Easy-Shopping"
        techs={techData[0]}
      />
    </Container>
  )
};