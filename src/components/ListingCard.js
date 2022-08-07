import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {

  const [likeToggle, setLikeToggle] = useState(false)

  function handleLikeToggle() {
    setLikeToggle(likeToggle => !likeToggle)
  }
  
  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`,{
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => onDelete(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        <button 
        onClick={handleLikeToggle}
        className={likeToggle ? "emoji-button favorite active" : "emoji-button favorite"}>
        {likeToggle ? "★" : "☆"}</button>
        <strong>{listing.description}</strong>
        <span>{listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
