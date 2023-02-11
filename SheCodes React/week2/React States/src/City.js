import React from "react";

export default function City(props) {
  function celsiusToFahrenheit() {
    return Math.round(props.temperature * (9 / 5) + 32);
  }
  function message(event) {
    event.preventDefault();
    alert(`Temperature in Fahrenheit is ${celsiusToFahrenheit()}°F`);
  }
  return (
    <div className="City">
      It is {props.temperature}°C |
      <a href="/" onClick={message}>
        °F
      </a>{" "}
      in {props.name}
    </div>
  );
}
