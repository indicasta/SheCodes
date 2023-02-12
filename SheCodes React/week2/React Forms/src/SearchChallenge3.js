import React, { useState } from "react";

export default function SearchChallenge3() {
  let [CityToSearch, setCityToSearch] = useState("Search for a City");

  function handleSubmit(event) {
    event.preventDefault();
    if (CityToSearch.length === 0) setCityToSearch("Search for a City");
    alert(`🔎 ${CityToSearch}`);
  }
  function cityToSearch(event) {
    event.preventDefault();
    setCityToSearch(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a City"
        onChange={cityToSearch}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
