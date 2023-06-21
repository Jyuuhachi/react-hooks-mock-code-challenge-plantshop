import React from "react";

function Search({filter, filterPlants}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={filter}
        onChange={(e) => filterPlants(e)}
      />
    </div>
  );
}

export default Search;
