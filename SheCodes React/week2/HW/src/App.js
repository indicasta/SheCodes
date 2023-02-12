import React from "react";
import Search from "./Search";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        Weather Search Engine <span>🌦</span>
      </h1>
      <Search />
    </div>
  );
}
