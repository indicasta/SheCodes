import React, { useState } from "react";

export default function CityChallenge2(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function celsiusToFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * (9 / 5) + 32));
  }
  return (
    <div className="CityChallenge2">
      It is {temperature}°C |
      <a href="/" onClick={celsiusToFahrenheit}>
        °F
      </a>{" "}
      in {props.name}
    </div>
  );
}
