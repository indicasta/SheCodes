import React from "react";

export default function SearchChallenge2() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Searching...");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search for a City" />
      <input type="submit" value="Search" />
    </form>
  );
}
