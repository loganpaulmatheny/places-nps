import "./Card.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Card({ id, fullname, visited, toggleVisit }) {
  function handleToggle() {
    toggleVisit(id); // Pass the ID to the toggleVisit function
  }
  return (
    <div className="card">
      {!visited ? (
        <img
          className="visit-icon"
          src={process.env.PUBLIC_URL + "/toVisit.png"}
          alt="an empty trail signpost"
          onClick={handleToggle}
        />
      ) : (
        <img
          className="visit-icon"
          src={process.env.PUBLIC_URL + "/visited.png"}
          alt="a colored trail signpost"
          onClick={handleToggle}
        />
      )}
      <h2>{fullname}</h2>
      <NavLink to={`/park/${id}`} className="nav-link">
        <img
          className="arrow-icon"
          src={process.env.PUBLIC_URL + "/arrow.png"}
          alt="arrow with square around it"
        />
      </NavLink>
    </div>
  );
}

export default Card;
