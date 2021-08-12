import React from "react";
import "./styles.scss";

import { StaticImage } from "gatsby-plugin-image";

export default function ServicesSection() {
  return (
    <div className="services-section-container">
      <div className="service-container">
        <h2>אחסנה</h2>
        <StaticImage src="../../assets/images/storage.jpg" alt="מחסן" />
      </div>

      <div className="service-container">
        <h2>אריזה</h2>
        <StaticImage src="../../assets/images/box.jpg" alt="אריזה" />
      </div>

      <div className="service-container">
        <h2>הובלה ב80° -</h2>
        <StaticImage
          src="../../assets/images/dry-ice.jpg"
          alt="קרח יבש להולה"
        />
      </div>

      <div className="service-container">
        <h2>הובלת משרדים</h2>
        <StaticImage src="../../assets/images/office.jpg" alt="משרד" />
      </div>

      <div className="service-container">
        <h2>הובלת מעבדות</h2>
        <StaticImage src="../../assets/images/laboratory.jpg" alt="מעבדה" />
      </div>

      <div className="service-container">
        <h2>הובלת מרפאות</h2>
        <StaticImage src="../../assets/images/clinic.jpg" alt="מרפאה" />
      </div>
    </div>
  );
}
