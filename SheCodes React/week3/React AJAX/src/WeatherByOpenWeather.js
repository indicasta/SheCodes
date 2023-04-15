import React from "react";
import axios from "axios";
import { useState } from "react";

export default function WeatherByOpenWeather(props) {
  let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let [temperature, setTemperature] = useState(null);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  function getTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  axios.get(apiUrl).then(getTemperature);
  if (temperature) {
    return (
      <div className="WeatherByOpenWeather">
        <p>
          Right now in <strong>{props.city}</strong> there are{" "}
          <strong>{Math.round(temperature)}°C</strong>
        </p>
      </div>
    );
  } else {
    return <p>Loading temperature for {props.city} city...</p>;
  }
}
