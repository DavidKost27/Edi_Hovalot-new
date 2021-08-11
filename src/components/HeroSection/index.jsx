import React from "react";
import "./styles.scss";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

// Components
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

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
      <div className="home-container">
        <h1>אדי הובלות</h1>
        <p>שירותי הובלה אחסנה ואריזה מכל הלב - לכל אחד - בכל מקום</p>

        <PrimaryButton primaryText={"קבלו הצעת מחיר בחינם"} />
        <SecondaryButton secondaryText={"? למה כדאי לבחור בנו"} />
      </div>
    </BgImage>
  );
}
