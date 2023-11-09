import "./Error.css";
import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-message">
        Oops, looks like you might need to check the map
      </h1>
      <img
        className="need-adventure"
        src={process.env.PUBLIC_URL + "/map.png"}
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
  );
}

export default Error;
