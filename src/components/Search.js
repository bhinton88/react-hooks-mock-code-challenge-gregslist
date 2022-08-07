import React from "react";

function Search({ searchValue, setSearchValue }) {
  
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
