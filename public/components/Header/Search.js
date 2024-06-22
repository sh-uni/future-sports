import React from 'react';



const Search = () => {

  // function to initialise all text elements that are searchable
  const getsearchableText = () => {
    // Get array of text objects for searching
    const searchableTextList = ["WelcomeText", "main-text-p"];   // , "LatestNews"];
    let searchableText = [];
    let textItem = 0;
    for (textItem in searchableTextList) {
      searchableText.push(document.getElementById(searchableTextList[textItem]));
    }
    return searchableText;
  };
  
  //function to search text 
  const submitSearch = (event) => {
    event.preventDefault();
    const input = document.getElementById("mySearchBar");
    const keyword = input.value;

    let searchableText = getsearchableText();

    // Check the input is not empty
    if (keyword !== "") {
      let textObject = 0;
      for(textObject in searchableText) {
        // Use regular expression with global and case insensitive setting (gi)
        let regExp = new RegExp(keyword, "gi");
        searchableText[textObject].innerHTML = (searchableText[textObject].textContent).replace(regExp, "<mark>$&</mark>");
      }
    }
    // Empty search returns text to original state
    else {  
      let textObject = 0;
      for(textObject in searchableText) {
        searchableText[textObject].innerHTML = (searchableText[textObject].textContent).replace(searchableText[textObject].textContent, "$&");
      }
    }
  };

  return (
    <div className="Search">
      <form id="searchBox" onSubmit={submitSearch}>
        <label id="keywords">Search:</label>
        <input type="text" id="mySearchBar" placeholder=" search..." name="keywords"/>
        {/*<input style={{display: "none"}} type="button" id="searchBarButton" value="Search" onClick="search();"/>  //button not required */}
      </form> 
    </div>
  );
};

export default Search; 
