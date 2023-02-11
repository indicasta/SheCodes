import React from "react";

export default function Weather(props) {
  function celsiusToFahrenheit() {
    return Math.round((props.temperature * 9) / 5) + 32;
  }
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and{" "}
      {celsiusToFahrenheit()}°F
    </div>
  );
}
