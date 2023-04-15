import React from "react";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1>The temperature in {props.city} is 17°C</h1>
    </div>
  );
}
