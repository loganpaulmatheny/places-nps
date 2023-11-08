import "./Visit.css";
import React from "react";
import Parks from "../Parks/Parks";
// import { useParams } from "react-router-dom";

function Visit({ parks, toggleVisit }) {
  const visitedParks = parks.filter((park) => park.visited === true);

  return (
    <div>
      <Parks parks={visitedParks} toggleVisit={toggleVisit} />
    </div>
  );
}

export default Visit;
