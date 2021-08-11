import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function MobileMenu(props) {
  const { isOpen, toggleMenu } = props;

  const hiddenMenu = {
    visible: {
      x: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      x: "-100vw",
      transition: {
        staggerChildren: 0.1,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  };

  const item = {
    visible: {
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      x: "-150vw",
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div
      className="overlay"
      onClick={toggleMenu}
      aria-hidden="true"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${isOpen ? 0.7 : 0})`,
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <motion.div
        className="links-container"
        variants={hiddenMenu}
        initial="hidden"
        animate={`${isOpen ? "visible" : "hidden"}`}
      >
        <motion.div variants={item}>
          <a onClick={toggleMenu} href="#heroSection">
            דף הבית
          </a>
        </motion.div>

        <motion.div variants={item}>
          <a onClick={toggleMenu} href="#about">
            אודות
          </a>
        </motion.div>

        <motion.div variants={item}>
          <a onClick={toggleMenu} href="#contact">
            צור קשר
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
