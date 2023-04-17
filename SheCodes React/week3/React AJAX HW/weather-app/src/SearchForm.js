import React, { useState } from "react";
import "./App.css";
import WeatherByOpenWeather from "./WeatherByOpenWeather";

export default function SearchForm() {
  const [CityToSearch, setCityToSearch] = useState("");

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setCityToSearch(event.target.city.value);
  //   console.log({ CityToSearch });
  //   return <WeatherByOpenWeather city={CityToSearch} />;
  // }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ CityToSearch });
        return <WeatherByOpenWeather city={CityToSearch} />;
      }}
    >
      <input
        type="search"
        placeholder="Enter a City"
        name="city"
        autoComplete="off"
        value={CityToSearch}
        onChange={(ev) => setCityToSearch(ev.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
