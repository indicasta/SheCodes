import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react";

import "./styles.css";
import BalticCountries from "./BalticCountries";
import Countries from "./Countries";
import CountriesCapitals from "./CountriesCapitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let countries = ["France", "USA", "Australia", "Japan"];
let countriesCapitals = [
  {
    country: "France",
    capital: "Paris",
  },
  {
    country: "USA",
    capital: "Washington D.C.",
  },
  {
    country: "Australia",
    capital: "Canberra",
  },
  {
    country: "Japan",
    capital: "Tokyo",
  },
];
root.render(
  <StrictMode>
    <div className="App">
      <h1>React Loops</h1>
      <h3>Challenge 1</h3>
      <p>
        Create a new Component called BalticCountries and list the 3 baltic
        countries (Estonia, Latvia, Lithuania) without using loops or variables.
        Include the component below.
      </p>
      <BalticCountries />
      <h3>Challenge 2</h3>
      <p>
        Include a component called Countries below and send the variable
        countries (created above) as a property. Create a new component called
        Countries and list all countries from the Countries component using a
        loop.
      </p>
      <Countries countriesList={countries} />
      <h3>Challenge 3</h3>
      <p>
        Modify the countries variable in the code above so it includes the
        country name but also the capital city of each country. Display each
        country and capital city in the Countries component
      </p>

      <CountriesCapitals countriesList={countriesCapitals} />
    </div>
  </StrictMode>
);
