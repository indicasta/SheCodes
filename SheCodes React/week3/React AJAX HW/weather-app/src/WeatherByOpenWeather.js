import React, { useEffect, useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function WeatherByOpenWeather(props) {
  let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let [weatherInfo, setWeatherInfo] = useState({});
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  function getInfo(response) {
    console.log(response);
    weatherInfo = {
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.weather.description,
      humidity: response.data.main.humidity,
      wind: response.wind.speed,
      icon: response.weather.icon,
    };
    setWeatherInfo(weatherInfo);

    console.log(response.data.main.temp);
  }
  useEffect(
    (apiUrl) => {
      axios.get(apiUrl).then(getInfo);
    },
    [getInfo]
  );

  if (weatherInfo) {
    return (
      <div className="WeatherByOpenWeather">
        <ul>
          <li>
            City: <strong>{weatherInfo.name}</strong>{" "}
          </li>
          <li>
            Temperature:{" "}
            <strong>{Math.round(weatherInfo.temperature || 0)}°C</strong>
          </li>
          <li>Description:</li>
          <li>Humidity:</li>
          <li>Wind:</li>
          <li>Icon:</li>
        </ul>
      </div>
    );
  } else {
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }
}
