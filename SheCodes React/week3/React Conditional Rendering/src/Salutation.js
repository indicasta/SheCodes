import React from "react";

export default function Salutation(props) {
  return <h2> {props.language === "French" ? "Bonjour!" : "Hello!"} 👋🏾</h2>;
}
