import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

// components
import SecondaryButton from "../../components/SecondaryButton";

// svg
import Phone from "../../assets/svg/phone-call.svg";
import Email from "../../assets/svg/email.svg";

export default function ContactSection(props) {
  const { contactSectionAnimation, contactSectionRef, variants } = props;

  return (
    <motion.div
      className="contact-section-container"
      id="צור_קשר"
      ref={contactSectionRef}
      animate={contactSectionAnimation}
      initial="hidden"
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <h2>צור קשר</h2>
      <SecondaryButton
        secondaryText={"052-7433-520"}
        href={"tel:0527433520"}
        icon={<Phone style={{ width: "100%", height: "100%" }} />}
      />
      <SecondaryButton
        secondaryText={"eduard1976@walla.co.il"}
        href={"mailto:eduard1976@walla.co.il"}
        icon={<Email style={{ width: "100%", height: "100%" }} />}
      />
    </motion.div>
  );
}
