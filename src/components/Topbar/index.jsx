import React from "react";
import "./styles.scss";
import Logo from "../../assets/svg/logo.svg";

// components
import Menu from "../Menu";

import { Turn as Hamburger } from "hamburger-react";

export default function Topbar(props) {
  const { isOpen, toggleMenu } = props;
  return (
    <div className="topbar">
      <div className="topbar-container">
        <Menu />
        <Hamburger
          direction="right"
          color="#ffffff"
          label="פתיחת תפריט"
          hideOutline={false}
          distance="sm"
          toggled={isOpen}
          toggle={toggleMenu}
        />
        <Logo />
      </div>
    </div>
  );
}
