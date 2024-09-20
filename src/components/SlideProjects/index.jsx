import React, { useState, useRef, useEffect } from "react";

import TechSolution from "../../assets/tech-solutions.png";
import BurgerShop from "../../assets/dev-burger.png";
import FinantialControl from "../../assets/dev-bills.png";
import UsersOffice from "../../assets/users-office.png";
import MarioBross from "../../assets/mario-bross.png";
import ConverterCoins from "../../assets/convert-money.png";
import JoKenPo from "../../assets/jo-ken-po.png";
import MenuBurgers from "../../assets/map-reduce-filter.png";
import EasyShopping from "../../assets/easy-shopping.png";

// Import icons
import {
  IoLogoReact,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoDocker,
} from "react-icons/io5";

import { TbBrandMongodb, TbBrandTypescript } from "react-icons/tb";

import {
  ArrowButton,
  ButtonContainer,
  ButtonContent,
  Card,
  CardContainer,
  Container,
  GithubButton,
  Indicator,
  IndicatorContainer,
  ProjectButton,
  Tech,
  TechContainer,
  Title,
} from "./styles";
import { MainContainer } from "../../pages/Home/styles";

export const ProjectsPage = () => {
  const cards = [
    {
      id: 1,
      title: "Tech Solutions",
      image: TechSolution,
      techs: [
        { icon: <IoLogoReact size={40} /> },
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoCss3 size={40} /> },
        { icon: <IoLogoHtml5 size={40} /> },
      ],
      deployUrl: "https://tech-solutions-kappa.vercel.app/",
      repoUrl: "https://github.com/sergioliveira-developer/tech-solutions",
    },

    {
      id: 2,
      title: "Burger Shop",
      image: BurgerShop,
      techs: [
        { icon: <IoLogoReact size={40} /> },
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoDocker size={40} /> },
        { icon: <TbBrandMongodb size={40} /> },
      ],
      deployUrl: "https://example.com/tech-solutions",
      repoUrl: "https://github.com/sergioliveira-developer/DevBurger",
    },
    {
      id: 3,
      title: "Finantial Control",
      image: FinantialControl,
      techs: [
        { icon: <TbBrandTypescript size={40} /> },
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoDocker size={40} /> },
        { icon: <TbBrandMongodb size={40} /> },
      ],
      deployUrl: "https://example.com/tech-solutions",
      repoUrl: "https://github.com/sergioliveira-developer/dev-bills",
    },
    {
      id: 4,
      title: "Users Office",
      image: UsersOffice,
      techs: [
        { icon: <IoLogoReact size={40} /> },
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoCss3 size={40} /> },
        { icon: <IoLogoHtml5 size={40} /> },
      ],
      deployUrl: "https://users-office.vercel.app",
      repoUrl: "https://github.com/sergioliveira-developer/Users-Office",
    },
    {
      id: 5,
      title: "Mario Builter",
      image: MarioBross,
      techs: [
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoCss3 size={40} /> },
        { icon: <IoLogoHtml5 size={40} /> },
      ],
      deployUrl: "https://mariobross-three.vercel.app",
      repoUrl: "https://github.com/sergioliveira-developer/Mario-Bross",
    },
    {
      id: 6,
      title: "Convert Money",
      image: ConverterCoins,
      techs: [
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoCss3 size={40} /> },
        { icon: <IoLogoHtml5 size={40} /> },
      ],
      deployUrl: "https://converter-coins.vercel.app",
      repoUrl: "https://github.com/sergioliveira-developer/Convert-Money",
    },

    {
      id: 7,
      title: "Game JO-KEN-PÔ",
      image: JoKenPo,
      techs: [
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoCss3 size={40} /> },
        { icon: <IoLogoHtml5 size={40} /> },
      ],
      deployUrl: "https://project-jo-ken-po.vercel.app",
      repoUrl: "https://github.com/sergioliveira-developer/Game-Jokenpo",
    },
    {
      id: 8,
      title: "Menu Burguer",
      image: MenuBurgers,
      techs: [
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoCss3 size={40} /> },
        { icon: <IoLogoHtml5 size={40} /> },
      ],
      deployUrl: "https://menu-burguers.vercel.app",
      repoUrl: "https://github.com/sergioscker/Menu-Burgers",
    },
    {
      id: 9,
      title: "Easy Shop",
      image: EasyShopping,
      techs: [
        { icon: <IoLogoJavascript size={40} /> },
        { icon: <IoLogoCss3 size={40} /> },
        { icon: <IoLogoHtml5 size={40} /> },
      ],
      deployUrl: "https://easy-shopping-pied.vercel.app",
      repoUrl: "https://github.com/sergioliveira-developer/Easy-Shopping",
    },
  ];

  const cardsPerView = 4; // Número de cards visíveis
  const totalCards = cards.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const cardWidth = sliderRef.current.offsetWidth / cardsPerView;
    let nextIndex = currentIndex;

    // Corrigir o índice para navegação
    if (direction === "right") {
      nextIndex = Math.min(currentIndex + 1, totalCards - cardsPerView);
    } else if (direction === "left") {
      nextIndex = Math.max(currentIndex - 1, 0);
    }

    sliderRef.current.scrollLeft = nextIndex * cardWidth;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const cardWidth = slider.offsetWidth / cardsPerView;
    slider.scrollLeft = currentIndex * cardWidth;
  }, [currentIndex]);

  return (
    <MainContainer>
      <Title>Projects</Title>

      <ButtonContent>
        <div className="arrow-button">
          <ArrowButton
            aria-label="Scroll left"
            onClick={() => handleScroll("left")}
          >
            {"<"}
          </ArrowButton>
          <ArrowButton
            aria-label="Scroll right"
            onClick={() => handleScroll("right")}
          >
            {">"}
          </ArrowButton>
        </div>
      </ButtonContent>

      <Container>
        <CardContainer ref={sliderRef}>
          {cards.map((card, index) => (
            <Card key={index}>
              <img
                src={card.image}
                alt={card.title}
                className="card-image"
                loading="lazy"
              />
              <h3>{card.title}</h3>
              <TechContainer>
                {card.techs.map((tech, techIndex) => (
                  <Tech key={techIndex}>{tech.icon}</Tech>
                ))}
              </TechContainer>
              <ButtonContainer>
                <ProjectButton
                  aria-label={`Ver projeto ${card.title}`}
                  onClick={() =>
                    window.open(card.deployUrl, "_blank", "noopener noreferrer")
                  }
                >
                  Ver Projeto
                </ProjectButton>
                <GithubButton
                  aria-label={`Ver repositório ${card.title}`}
                  onClick={() =>
                    window.open(card.repoUrl, "_blank", "noopener noreferrer")
                  }
                >
                  Ver Repositório
                </GithubButton>
              </ButtonContainer>
            </Card>
          ))}
        </CardContainer>

        <IndicatorContainer>
          {Array.from({ length: totalCards - cardsPerView + 1 }).map(
            (_, idx) => (
              <Indicator
                key={idx}
                isActive={currentIndex === idx}
                onClick={() => setCurrentIndex(idx)}
              />
            )
          )}
        </IndicatorContainer>
      </Container>
    </MainContainer>
  );
};
