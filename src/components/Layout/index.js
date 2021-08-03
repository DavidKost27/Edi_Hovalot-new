import React from "react";
import "./styles.scss";

// Components
import Topbar from "../Topbar";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Topbar />
    </div>
  );
}
