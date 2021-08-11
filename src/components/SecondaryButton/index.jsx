import React from "react";
import "./styles.scss";

export default function SecondaryButton(props) {
  const { secondaryText } = props;
  return <button className="secondaryButton">{`${secondaryText}`}</button>;
}
