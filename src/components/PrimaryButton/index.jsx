import React from "react";
import "./styles.scss";

export default function PrimaryButton(props) {
  const { primaryText } = props;
  return <button className="primaryButton">{`${primaryText}`}</button>;
}
