import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>JS Closures</h1>
      <h2>Challenge </h2>
      <p>
        Inside the component, Weather, create a function calculating the
        temperature in farenheit. Call this function from the JSX being returned
        in the Weather component
      </p>
      <Weather city="Paris" temperature={19} />
      <Weather city="New York" temperature={22} />
    </div>
  </StrictMode>
);
