import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function PrimaryButton(props) {
  const { primaryText, href } = props;
  return (
    <motion.a
      className="primaryButton"
      href={href}
      whileHover={{
        scale: 1.1,
      }}
    >{`${primaryText}`}</motion.a>
  );
}
