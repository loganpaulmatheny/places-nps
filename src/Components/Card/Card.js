import "./Card.css";
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ id, fullname, image_path, visited, toggleVisit }) {
  function handleToggle() {
    toggleVisit(id); // Pass the ID to the toggleVisit function
  }

  function handleKeyPress(event) {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
      handleToggle();
    }
  }

  return (
    <div className="card">
      <div
        className="upper-card"
        style={{
          backgroundImage: `url(${image_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <h2>{fullname}</h2>
      </div>
      {!visited ? (
        <img
          className="visit-icon"
          src={process.env.PUBLIC_URL + "/toVisit.png"}
          alt="an empty trail signpost"
          tabIndex="0" // Make it focusable
          onClick={handleToggle}
          onKeyDown={handleKeyPress}
        />
      ) : (
        <img
          className="visit-icon"
          src={process.env.PUBLIC_URL + "/visited.png"}
          alt="a colored trail signpost"
          tabIndex="0" // Make it focusable
          onClick={handleToggle}
          onKeyDown={handleKeyPress}
        />
      )}
      <div style={{ marginTop: "15px" }}>
        <NavLink to={`/park/${id}`} className="nav-link">
          <img
            className="arrow-icon"
            src={process.env.PUBLIC_URL + "/arrow.png"}
            alt="arrow with square around it"
          />
        </NavLink>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  image_path: PropTypes.string.isRequired,
  visited: PropTypes.bool.isRequired,
  toggleVisit: PropTypes.func.isRequired,
};

export default Card;
