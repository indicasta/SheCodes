import React, { useState } from "react";

export default function Search() {
  let [CityToSearch, setCityToSearch] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (CityToSearch.length === 0) setMessage("You must specify a City 🔎");
    else setMessage(`It is 10°C in ${CityToSearch}`);
  }
  function cityToSearch(event) {
    event.preventDefault();
    setCityToSearch(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a City"
          onChange={cityToSearch}
        />
        {"  "}
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
