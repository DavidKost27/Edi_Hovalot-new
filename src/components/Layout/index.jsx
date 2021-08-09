import React, { useState } from "react";
import "./styles.scss";

// Components
import Topbar from "../Topbar";
import Footer from "../Footer";

// Imported only for Mobile
import MobileMenu from "../MobileMenu";

export default function Layout({ children }) {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
    // get the body element tag
    let body = document.getElementsByTagName("body")[0];
    // apply the styles based on menu state
    if (!isOpen) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  };
  return (
    <>
      <Topbar isOpen={isOpen} toggleMenu={toggleMenu} />

      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      <div className="layout-container">{children}</div>

      <Footer />
    </>
  );
}
