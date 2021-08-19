import React from "react";
import "./styles.scss";

export default function Menu() {
  return (
    <div className="menu-container" aria-hidden="true">
      <a className="menu-container__link-text" href="#דף_הבית">
        דף הבית
      </a>
      <a className="menu-container__link-text" href="#אודות">
        אודות
      </a>
      <a className="menu-container__link-text" href="#צור_קשר">
        צור קשר
      </a>
    </div>
  );
}
