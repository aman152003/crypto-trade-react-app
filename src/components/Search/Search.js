import React, { useContext } from "react";

import "./Search.scss";
import { AppContext } from "../AppContext";
import searchIcon from "../../assets/images/Search.svg";

function Search() {
  const { setSearchTerm } = useContext(AppContext);
  return (
    <div className="search">
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        type="text"
        placeholder="search..."
      />
      <button>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
}
export default Search;
