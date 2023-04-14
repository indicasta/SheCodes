import React from "react";

export default function CountriesCapitals(props) {
  return (
    <div className="CountriesCapitals">
      <ul>
        {props.countriesList.map((item, index) => {
          return (
            <li key={index}>
              <strong>{item.capital}</strong> is the capital city of{" "}
              <strong>{item.country}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
