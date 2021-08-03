import React from "react";
import "./styles.scss";

import { Turn as Hamburger } from "hamburger-react";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <Hamburger
        direction="right"
        color="#ffffff"
        label="פתיחת תפריט"
        hideOutline={false}
        distance="sm"
        style={{ outline: "none" }}
      />
      <div className="topbar-container__logo">אדי הובלות</div>
    </div>
  );
}
