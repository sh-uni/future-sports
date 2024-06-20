import React from 'react';

const Search = () => {
  return (
    <div className="Search">
      <form id="searchBox">
        <label for="keywords">Search:</label>
        <input type="text" id="mySearchBar" placeholder=" search..." name="keywords"/>
        <input style={{display: "none"}} type="button" id="searchBarButton" value="Search" onClick="search();"/>
      </form>  
    </div>
  );
};

export default Search;