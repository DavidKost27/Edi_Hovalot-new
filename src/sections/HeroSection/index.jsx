import React from "react";
import "./styles.scss";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { motion } from "framer-motion";

// Components
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

export default function HeroSection(props) {
  const { heroSectionAnimation, heroSectionRef } = props;

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: { opacity: 0, x: 200 },
  };

  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "trucks.jpg" }) {
          childImageSharp {
            gatsbyImageData(webpOptions: { quality: 70 }, quality: 50)
          }
        }
      }
    `
  );

  const pluginImage = getImage(backgroundImage123);

  return (
    <BgImage image={pluginImage} className="backgound">
      <div className="hero-section-container" id="דף_הבית" ref={heroSectionRef}>
        <motion.h1
          animate={heroSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.45,
          }}
        >
          אדי הובלות
        </motion.h1>
        <motion.p
          animate={heroSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.45,
          }}
        >
          שירותי הובלה אחסנה ואריזה מכל הלב - לכל אחד - בכל מקום
        </motion.p>

        <motion.div
          className="buttons-container"
          animate={heroSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.45,
          }}
        >
          <PrimaryButton
            primaryText={"קבלו הצעת מחיר בחינם"}
            href={"tel:0527433520"}
          />
          <SecondaryButton
            secondaryText={"? למה כדאי לבחור בנו"}
            href={"#היתרונות"}
          />
        </motion.div>
      </div>
    </BgImage>
  );
}
