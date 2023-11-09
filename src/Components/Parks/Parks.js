import "./Parks.css";
import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

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

Parks.propTypes = {
  parks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      fullName: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
      directionsUrl: PropTypes.string,
      address: PropTypes.object,
      images: PropTypes.array,
      weatherInfo: PropTypes.string,
    })
  ).isRequired,

  toggleVisit: PropTypes.func.isRequired,
};

export default Parks;
