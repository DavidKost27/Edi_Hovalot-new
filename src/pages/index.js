import React from "react";
import "../styles/styles.scss";

// Components
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function MainApp() {
  return (
    <Layout>
      <div className="main-app">
        <HeroSection id="heroSection" />
        <div id="about">אודות</div>
        <div id="contact">צור קשר</div>
      </div>
    </Layout>
  );
}
