import React, { useState } from "react";

export default function CityChallenge3(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [currentUnit, setUnit] = useState("°C");
  let [nextUnit, setNextUnit] = useState("°F");

  function updateTemperature(event) {
    event.preventDefault();
    setUnit(nextUnit);
    if (currentUnit === "°C") {
      setNextUnit("°C");
      setTemperature(Math.round(props.temperature * (9 / 5) + 32));
    } else {
      setNextUnit("°F");
      setTemperature(props.temperature);
    }
  }
  return (
    <div className="CityChallenge3">
      It is {temperature}
      {currentUnit} |
      <a href="/" onClick={updateTemperature}>
        {nextUnit}
      </a>{" "}
      in {props.name}
    </div>
  );
}
