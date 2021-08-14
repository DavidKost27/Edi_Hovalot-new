import React from "react";
import "./styles.scss";

// components
import SecondaryButton from "../../components/SecondaryButton";

// svg
import Phone from "../../assets/svg/phone-call.svg";
import Email from "../../assets/svg/email.svg";

export default function ContactSection() {
  return (
    <div className="contact-section-container" id="contact">
      <h2>צור קשר</h2>
      <SecondaryButton
        secondaryText={"052-7433-520"}
        icon={<Phone style={{ width: "100%", height: "100%" }} />}
      />
      <SecondaryButton
        secondaryText={"eduard1976@walla.co.il"}
        icon={<Email style={{ width: "100%", height: "100%" }} />}
      />
    </div>
  );
}
