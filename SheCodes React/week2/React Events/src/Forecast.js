import React from "react";

export default function Forecast() {
  function message(event) {
    event.preventDefault();
    alert("Forecast feature is not ready yet");
  }
  return (
    <a href="/" onClick={message}>
      See forecast
    </a>
  );
}
