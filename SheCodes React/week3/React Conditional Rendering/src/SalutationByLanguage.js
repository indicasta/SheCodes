import React from "react";

export default function SalutationByLanguage(props) {
  function Salutation() {
    let salutation;
    switch (props.language) {
      case "French":
        salutation = "Bonjour";
        break;
      case "Spanish":
        salutation = "Hola";
        break;
      case "Italian":
        salutation = "Ciao";
        break;
      default:
        salutation = "Hello";
        break;
    }
    return salutation;
  }
  return (
    <h2>
      {Salutation()}
      <span role="img" aria-label="hands">
        🙌🏾
      </span>
    </h2>
  );
}
