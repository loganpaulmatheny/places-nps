import "./ParkBlowUp.css";
import React from "react";
import PropTypes from "prop-types";

function ParkBlowUp({ park, toggleVisit }) {
  const images = park.images.map((image) => {
    return (
      <img
        key={image.url}
        className="blow-up-image"
        src={image.url}
        alt={image.altText}
      />
    );
  });

  return (
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
          {park.address.street} {park.address.city}, {park.address.stateCode}{" "}
          {park.address.zip}
        </p>
        <a href={park.directionsUrl}>Directions</a>
      </div>
    </article>
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
  }).isRequired,

  toggleVisit: PropTypes.func.isRequired,
};

export default ParkBlowUp;
