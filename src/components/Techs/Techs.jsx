import React from "react";
import S from "./styles.module.scss";
import { motion } from "framer-motion";

export const Techs = ({ title, techs }) => {
  // variantes da animação
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            {tech.icon}
            <p className={S.techName}>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
