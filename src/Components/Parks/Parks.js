import "./Parks.css";
import React from "react";
import Card from "../Card/Card";

function Parks({ parks }) {
  // Change this to a filter first when you're favoriting to determine which parks should be rendered - all of them or just the ones you want to visit
  const parkCards = parks.map((park) => {
    return <Card id={park.id} fullname={park.fullName} key={park.id} />;
  });

  return <div className="parks-container">{parkCards}</div>;
}

export default Parks;
