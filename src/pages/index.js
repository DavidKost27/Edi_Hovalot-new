import React, { useEffect } from "react";
import "../styles/styles.scss";
import { useAnimation } from "framer-motion";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useInView } from "react-intersection-observer";

// Components
import Layout from "../components/Layout";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import FeaturesSection from "../sections/FeaturesSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

// SEO
import Seo from "../components/seo";

export default function MainApp() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const heroSectionAnimation = useAnimation();
  const servicesSectionAnimation = useAnimation();
  const featuresSectionAnimation = useAnimation();
  const aboutSectionAnimation = useAnimation();
  const contactSectionAnimation = useAnimation();

  const [heroSectionRef, heroSectionInView] = useInView({
    triggerOnce: true,
  });
  const [servicesSectionRef, servicesSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-20px",
  });
  const [featuresSectionRef, featuresSectionInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? "-100px" : "-300px",
  });
  const [aboutSectionRef, aboutSectionInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const [contactSectionRef, contactSectionInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  // Welcome InView
  useEffect(() => {
    if (heroSectionInView) {
      heroSectionAnimation.start("visible");
      // console.log("welcome is visible");
    }
  }, [heroSectionAnimation, heroSectionInView]);

  // servicesSection InView
  useEffect(() => {
    if (servicesSectionInView) {
      servicesSectionAnimation.start("visible");
      console.log("servicesSection is visible");
    }
  }, [servicesSectionAnimation, servicesSectionInView]);

  // featuresSection InView
  useEffect(() => {
    if (featuresSectionInView) {
      featuresSectionAnimation.start("visible");
      console.log("featuresSection is visible");
    }
  }, [featuresSectionAnimation, featuresSectionInView]);

  // aboutSection InView
  useEffect(() => {
    if (aboutSectionInView) {
      aboutSectionAnimation.start("visible");
      // console.log("aboutSection is visible");
    }
  }, [aboutSectionAnimation, aboutSectionInView]);

  // ContactSection InView
  useEffect(() => {
    if (contactSectionInView) {
      contactSectionAnimation.start("visible");
      // console.log("contactSection is visible");
    }
  }, [contactSectionAnimation, contactSectionInView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 72 },
  };

  return (
    <Layout>
      <Seo />
      <div className="main-app">
        <div className="main-app__container">
          <HeroSection
            heroSectionAnimation={heroSectionAnimation}
            heroSectionRef={heroSectionRef}
          />
          <ServicesSection
            servicesSectionAnimation={servicesSectionAnimation}
            servicesSectionRef={servicesSectionRef}
          />
          <hr />
          <FeaturesSection
            featuresSectionAnimation={featuresSectionAnimation}
            featuresSectionRef={featuresSectionRef}
            variants={variants}
          />
          <hr />
          <AboutSection
            aboutSectionAnimation={aboutSectionAnimation}
            aboutSectionRef={aboutSectionRef}
            variants={variants}
          />
          <hr />
          <ContactSection
            contactSectionAnimation={contactSectionAnimation}
            contactSectionRef={contactSectionRef}
            variants={variants}
          />
        </div>
      </div>
    </Layout>
  );
}
