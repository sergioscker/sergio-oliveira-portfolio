import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import TechSolution from "../../assets/tech-solutions.png";
import BurgerShop from "../../assets/burger-shop.png";
import FinantialControl from "../../assets/dev-bills.png";
import UsersOffice from "../../assets/users-office.png";
import MarioBross from "../../assets/mario-bross.png";
import ConverterCoins from "../../assets/convert-money.png";
import JoKenPo from "../../assets/jo-ken-po.png";
import MenuBurgers from "../../assets/map-reduce-filter.png";
import EasyShopping from "../../assets/easy-shopping.png";

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
  Container,
  GithubButton,
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
      deployUrl: "https://tech-solutions-kappa.vercel.app",
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
      deployUrl: "https://burguershop-eight.vercel.app",
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
      deployUrl: "https://finantialcontrol.vercel.app",
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

  const cardsContainerRef = useRef(null);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    if (cardsContainerRef.current) {
      const scrollWidth = cardsContainerRef.current.scrollWidth;
      const clientWidth = cardsContainerRef.current.clientWidth;
      setMaxScrollWidth(scrollWidth - clientWidth);
    }
  }, []);

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      const newScrollPos = Math.max(scrollPos - 300, 0);
      setScrollPos(newScrollPos);
      cardsContainerRef.current.scrollTo({
        left: newScrollPos,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      const newScrollPos = Math.min(scrollPos + 300, maxScrollWidth);
      setScrollPos(newScrollPos);
      cardsContainerRef.current.scrollTo({
        left: newScrollPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <MainContainer>
      <Title>Projects</Title>

      <ButtonContent>
        <div className="arrow-button">
          <ArrowButton aria-label="Scroll left" onClick={scrollLeft}>
            {"<"}
          </ArrowButton>
          <ArrowButton aria-label="Scroll right" onClick={scrollRight}>
            {">"}
          </ArrowButton>
        </div>
      </ButtonContent>

      <Container>
        <motion.div
          ref={cardsContainerRef}
          className="card-container"
          dragConstraints={cardsContainerRef}
          whileTap={{ cursor: "grabbing" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Card>
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image"
                  loading="lazy"
                />
                <h3>{card.title}</h3>
                <TechContainer>
                  {card.techs.map((tech, index) => (
                    <Tech key={index}>{tech.icon}</Tech>
                  ))}
                </TechContainer>

                <ButtonContainer>
                  <ProjectButton
                    onClick={() =>
                      window.open(
                        card.deployUrl,
                        "_blank",
                        "noopener noreferrer"
                      )
                    }
                  >
                    View Project
                  </ProjectButton>
                  <GithubButton
                    onClick={() =>
                      window.open(card.repoUrl, "_blank", "noopener noreferrer")
                    }
                  >
                    View Repository
                  </GithubButton>
                </ButtonContainer>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </MainContainer>
  );
};
