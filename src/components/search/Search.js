import React, { useState } from "react";
import HomeView from "../../views/HomeView";

const Search = ({onSubmit}) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(searchInput);
    handleReset();
  };
  const handleReset = () => {
    setSearchInput("");
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          placeholder="search movie title"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input type="submit" value="Search movie" />
        <button onSubmit={handleSearch} value="search">SUBMIT</button>
      </form>
    </div>
  );
};
export default Search;
