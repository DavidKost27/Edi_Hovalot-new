import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function SecondaryButton(props) {
  const { secondaryText, icon, href } = props;
  return (
    <motion.a
      className="secondaryButton"
      href={href}
      whileHover={{
        scale: 1.05,
      }}
    >
      <span>{icon}</span>
      <div>{`${secondaryText}`}</div>
    </motion.a>
  );
}
