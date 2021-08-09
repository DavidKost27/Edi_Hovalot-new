import React from "react";
import "../styles/styles.scss";
import { StaticImage } from "gatsby-plugin-image";

// Components
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="main-app">
        <StaticImage
          id="homepage"
          src="../assets/images/trucks.jpg"
          alt="A convoy of trucks"
        />
        <div id="about">אודות</div>
        <div id="contact">צור קשר</div>
      </div>
    </Layout>
  );
}
