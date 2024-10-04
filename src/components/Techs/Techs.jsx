import React from "react";
import S from "./styles.module.scss";
import { motion } from "framer-motion"; // Importar Framer Motion

export const Techs = ({ title, techs }) => {
  // Definir as variantes da animação
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5, // Duração da animação
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={S.divTech}>
      <h1>{title}</h1>
      <div className={S.divTechs}>
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className={S.techs}
            variants={iconVariants} // Aplicar as variantes de animação
            initial="hidden" // Estado inicial
            whileInView="visible" // Animação ocorre ao aparecer na tela
            viewport={{ amount: 0.5 }} // Controla a exibição da animação
          >
            {tech.icon}
            <p className={S.techName}>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
