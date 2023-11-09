import "./ParkBlowUp.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ParkBlowUp({ park = {}, toggleVisit = () => {} }) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!(park && park.images && park.images.length > 0)) {
      setError("yup there's a problem");
    }
  }, [park]);

  const images =
    park && park.images && park.images.length > 0
      ? park.images.map((image) => (
          <img
            key={image.url}
            className="blow-up-image"
            src={image.url}
            alt={image.altText}
          />
        ))
      : null;

  return (
    <div>
      {error ? (
        <h2>Oops</h2>
      ) : (
        <article className="park-info">
          <div className="title">
            <h1>{park.fullName}</h1>
            {!park.visited ? (
              <img
                className="visit-icon-blowup"
                src={process.env.PUBLIC_URL + "/toVisit.png"}
                alt="an empty trail signpost"
                onClick={() => toggleVisit(park.id)}
              />
            ) : (
              <img
                className="visit-icon-blowup"
                src={process.env.PUBLIC_URL + "/visited.png"}
                alt="a colored trail signpost"
                onClick={() => toggleVisit(park.id)}
              />
            )}
          </div>
          <div className="park-image-container">{images}</div>
          <div className="details-container">
            <h2>Description:</h2>
            <p>{park.description}</p>
            <p>
              <strong>Address: </strong>
              {park.address && park.address.street}{" "}
              {park.address && park.address.city},{" "}
              {park.address && park.address.stateCode}{" "}
              {park.address && park.address.zip}
            </p>
            <a href={park.directionsUrl}>Directions</a>
          </div>
        </article>
      )}
    </div>
  );
}

ParkBlowUp.propTypes = {
  park: PropTypes.shape({
    id: PropTypes.string,
    fullName: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    directionsUrl: PropTypes.string,
    address: PropTypes.object,
    images: PropTypes.array,
    weatherInfo: PropTypes.string,
  }),

  toggleVisit: PropTypes.func,
};

export default ParkBlowUp;
