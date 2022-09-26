import React from "react";

function Search({findSearch}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => findSearch(e.target.value)} // detects change in an input value
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
