import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

// - APP
// -- Header
// --- Search
// -- Listing Container
// --- Listing Card 

function App() {

  const [listingData, setListingData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setListingData(data))
  },[])

  function onDelete(deletedItem){
    const updatedListings = listingData.filter(value => value.id !== deletedItem.id)
    setListingData(updatedListings)
  }

  const searchedListings = listingData.filter(value => value.description.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="app">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <ListingsContainer onDelete={onDelete} listingData={searchedListings} />
    </div>
  );
}

export default App;
