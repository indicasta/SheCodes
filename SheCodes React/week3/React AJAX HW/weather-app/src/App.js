import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./SearchForm";
import { useState } from "react";
import WeatherByOpenWeather from "./WeatherByOpenWeather";

function App() {
  const [city, setCity] = useState("");
  return (
    <div className="App">
      <header className="App-info">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather App ⛅</h1>
        <SearchForm setCity={setCity} />
        <div>
          <WeatherByOpenWeather city={city} />
        </div>
      </header>
    </div>
  );
}

export default App;
