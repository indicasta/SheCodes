import React from "react";

export default function City({ name, temperature }) {
  return (
    <div>
      It is {temperature}°C in {name}
    </div>
  );
}
