import React from "react";
import "./styles.scss";

// Components
import Topbar from "../Topbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Topbar />

      <div className="layout-container">{children}</div>

      <Footer />
    </>
  );
}
