import React from "react";

import "./Cities.css";

export default function Cities() {
  let cities = ["Sydney", "Paris", "Montreal", "Lisbon", "San Francisco"];
  return cities.map((city) => <li className="Cities"> {city} </li>);
}
