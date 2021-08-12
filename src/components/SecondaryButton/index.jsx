import React from "react";
import "./styles.scss";

export default function SecondaryButton(props) {
  const { secondaryText, icon } = props;
  return (
    <button className="secondaryButton">
      <span>{icon}</span>
      <div>{`${secondaryText}`}</div>
    </button>
  );
}
