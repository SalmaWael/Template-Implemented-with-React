import React, { useState } from "react";

import "./search.css";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onInputchange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <div id="SearchComponent">
      <div id="searchInputDiv">
        <input
          id="searchInput"
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) => onInputchange(e.target.value)}
        />
      </div>
      <div id="searchIcon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Search;
