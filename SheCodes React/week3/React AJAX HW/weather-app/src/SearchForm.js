import React, { useState } from "react";
import "./App.css";

export default function SearchForm({ setCity }) {
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
        setCity(CityToSearch);
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
