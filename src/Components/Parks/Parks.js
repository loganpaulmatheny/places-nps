import "./Parks.css";
import React from "react";
import Card from "../Card/Card";

function Parks({ parks, toggleVisit }) {
  // Change this to a filter first when you're favoriting to determine which parks should be rendered - all of them or just the ones you want to

  const parkCards = parks.map((park) => {
    return (
      <Card
        id={park.id}
        image_path={park.images[0].url}
        fullname={park.fullName}
        visited={park.visited}
        key={park.id}
        toggleVisit={toggleVisit}
      />
    );
  });

  return <div className="parks-container">{parkCards}</div>;
}

export default Parks;
