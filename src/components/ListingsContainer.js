import React from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({ listingData, onDelete }) {

  return (
    <main>
      <ul className="cards">
        {listingData.map(value => 
          <ListingCard onDelete={onDelete} listing={value} key={value.id} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
