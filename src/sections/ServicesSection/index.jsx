import React from "react";
import "./styles.scss";

import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export default function ServicesSection(props) {
  const { servicesSectionAnimation, servicesSectionRef } = props;

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 72,
      transition: {
        staggerChildren: 0.3,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  };

  const item = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      y: 72,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className="services-section-container">
      <motion.div
        ref={servicesSectionRef}
        className="grid-container"
        animate={servicesSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        <motion.div className="service-container" variants={item}>
          <h2>אחסנה</h2>
          <StaticImage src="../../assets/images/storage.jpg" alt="מחסן" />
        </motion.div>

        <motion.div className="service-container" variants={item}>
          <h2>אריזה</h2>
          <StaticImage src="../../assets/images/box.jpg" alt="אריזה" />
        </motion.div>

        <motion.div className="service-container" variants={item}>
          <h2>הובלה ב80° -</h2>
          <StaticImage
            src="../../assets/images/dry-ice.jpg"
            alt="קרח יבש להולה"
          />
        </motion.div>

        <motion.div className="service-container" variants={item}>
          <h2>הובלת משרדים</h2>
          <StaticImage src="../../assets/images/office.jpg" alt="משרד" />
        </motion.div>

        <motion.div className="service-container" variants={item}>
          <h2>הובלת מעבדות</h2>
          <StaticImage src="../../assets/images/laboratory.jpg" alt="מעבדה" />
        </motion.div>

        <motion.div className="service-container" variants={item}>
          <h2>הובלת מרפאות</h2>
          <StaticImage src="../../assets/images/clinic.jpg" alt="מרפאה" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
