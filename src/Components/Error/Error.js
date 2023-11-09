import "./Error.css";
import React from "react";
import { Link } from "react-router-dom";

function Error({ error }) {
  return (
    <div>
      {!error ? (
        <div className="error-container">
          <h1 className="error-message">
            Oops, looks like you might need to check the map
          </h1>
          <img
            className="error-image"
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
      ) : (
        <div className="error-container">
          <h1 className="error-message">{error}</h1>
          <img
            className="error-image"
            src={process.env.PUBLIC_URL + "/compass.png"}
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
      )}
    </div>
  );
}

export default Error;
