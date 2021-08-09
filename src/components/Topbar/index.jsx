import React from "react";
import "./styles.scss";
import Logo from "../../assets/svg/logo.svg";

import { Turn as Hamburger } from "hamburger-react";

export default function Topbar(props) {
  const { isOpen, toggleMenu } = props;
  return (
    <div className="topbar-container">
      <Hamburger
        direction="right"
        color="#ffffff"
        label="פתיחת תפריט"
        hideOutline={false}
        distance="sm"
        toggled={isOpen}
        toggle={toggleMenu}
      />
      <Logo style={{ width: "130px", height: "auto", margin: "0 0 5px 0" }} />
    </div>
  );
}
