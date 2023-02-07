import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Cities from "./Cities";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <p>Move all cities into a new component called Cities</p>
      <Cities />
    </div>
  </StrictMode>
);
