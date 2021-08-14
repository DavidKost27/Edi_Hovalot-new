import React from "react";
import "./styles.scss";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

// Components
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

export default function HeroSection() {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "trucks.jpg" }) {
          childImageSharp {
            gatsbyImageData(webpOptions: { quality: 70 }, quality: 50)
          }
        }
      }
    `
  );

  const pluginImage = getImage(backgroundImage123);

  return (
    <BgImage image={pluginImage} className="backgound">
      <div className="hero-section-container" id="heroSection">
        <h1>אדי הובלות</h1>
        <p>שירותי הובלה אחסנה ואריזה מכל הלב - לכל אחד - בכל מקום</p>

        <div className="buttons-container">
          <PrimaryButton primaryText={"קבלו הצעת מחיר בחינם"} />
          <SecondaryButton secondaryText={"? למה כדאי לבחור בנו"} />
        </div>
      </div>
    </BgImage>
  );
}
