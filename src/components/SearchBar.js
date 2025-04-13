import React from "react";

function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search expenses..."
      />
    </div>
  );
}

export default SearchBar;