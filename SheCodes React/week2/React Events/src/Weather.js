import React from "react";

export default function Weather() {
  function message(event) {
    event.preventDefault();
    alert("Coming soon...");
  }
  return <button onClick={message}>Current Temperature</button>;
}
