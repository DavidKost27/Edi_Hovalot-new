import React from "react";
import "../styles/styles.scss";

// Components
import Layout from "../components/Layout";
import Home from "../components/Home";

export default function MainApp() {
  return (
    <Layout>
      <div className="main-app">
        <Home id="homepage" />
        <div id="about">אודות</div>
        <div id="contact">צור קשר</div>
      </div>
    </Layout>
  );
}
