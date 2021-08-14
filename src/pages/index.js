import React from "react";
import "../styles/styles.scss";

// Components
import Layout from "../components/Layout";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import FeaturesSection from "../sections/FeaturesSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

export default function MainApp() {
  return (
    <Layout>
      <div className="main-app">
        <div className="main-app__container">
          <HeroSection />
          <ServicesSection />
          <hr />
          <FeaturesSection />
          <hr />
          <AboutSection />
          <hr />
          <ContactSection />
        </div>
      </div>
    </Layout>
  );
}
