import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <p>Migrate this HTML from index.html to the React index.js</p>
      <small>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="important"
        >
          Official React Website
        </a>
      </small>
    </div>
  </StrictMode>
);
