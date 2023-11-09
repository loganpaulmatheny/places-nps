import "./Visit.css";
import React from "react";
import Parks from "../Parks/Parks";
// import { useParams } from "react-router-dom";

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
          <img className="need-adventure" src={process.env.PUBLIC_URL + "/indiana.png"} alt="" />
        </div>
      ) : (
        <Parks parks={visitedParks} toggleVisit={toggleVisit} />
      )}
    </div>
  );
}

export default Visit;
