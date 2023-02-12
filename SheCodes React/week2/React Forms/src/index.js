import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Search from "./Search";
import SearchChallenge2 from "./SearchChallenge2";
import SearchChallenge3 from "./SearchChallenge3";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>React Forms</h1>

        <h3>Challenge 1</h3>
        <p>
          Create a new component called Search with a search input and a button.
          Include it here.
        </p>
        <Search />
        <h3>Challenge 2</h3>
        <p>When the form is submitted, alert "Searching.." Include it here.</p>
        <SearchChallenge2 />
        <h3>Challenge 3</h3>
        <p>
          When the form is submitted with New York in the search input for
          example, alert "New York" Include it here.
        </p>
        <SearchChallenge3 />
      </div>
    </div>
  </StrictMode>
);
