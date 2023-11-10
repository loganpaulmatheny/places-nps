import "./Visit.css";
import React from "react";
import Parks from "../Parks/Parks";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Visit({ parks, toggleVisit }) {
  const visitedParks = parks.filter((park) => park.visited === true);

  return (
    <div className="visit-container">
      {visitedParks.length === 0 ? (
        <div className="need-container">
          <h2>
            Looks like you haven't visited any parks, it's time to hit the
            trail!
          </h2>
          <img
            className="need-adventure"
            src={process.env.PUBLIC_URL + "/indiana.png"}
            alt=""
          />
          <Link to="/">
            <img
              className="back-button"
              src={process.env.PUBLIC_URL + "/turn-around.png"}
              alt=""
            />
          </Link>
          <p>Back to Home</p>
        </div>
      ) : (
        <Parks parks={visitedParks} toggleVisit={toggleVisit} />
      )}
    </div>
  );
}

Visit.propTypes = {
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

export default Visit;
