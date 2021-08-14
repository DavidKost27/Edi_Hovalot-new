import React from "react";
import "./styles.scss";

export default function Menu() {
  return (
    <div className="menu-container" aria-hidden="true">
      <a className="menu-container__link-text" href="#heroSection">
        דף הבית
      </a>
      <a className="menu-container__link-text" href="#about">
        אודות
      </a>
      <a className="menu-container__link-text" href="#contact">
        צור קשר
      </a>
    </div>
  );
}
