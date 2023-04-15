import React from "react";
import ReactDOM from "react-dom";
import ReactAnimatedWeather from "react-animated-weather";
import LoginForm from "./LoginForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React External Components</h1>

      <h3>Challenge 1</h3>
      <p>
        Import and render this component{" "}
        <a href="https://www.npmjs.com/package/react-animated-weather">
          https://www.npmjs.com/package/react-animated-weather
        </a>
      </p>

      <br />
      <h3>Challenge 2</h3>
      <p>
        Display 3 different icons and change the properties for each of them{" "}
      </p>
      <LoginForm />
      <ReactAnimatedWeather
        icon={"PARTLY_CLOUDY_DAY"}
        color={"goldenrod"}
        size={256}
        animate={true}
      />
      <ReactAnimatedWeather
        icon={"WIND"}
        color={"sienna"}
        size={256}
        animate={true}
      />
      <ReactAnimatedWeather
        icon={"SNOW"}
        color={"deepskyblue"}
        size={256}
        animate={true}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
