import "./ParkBlowUp.css";
import React from "react";

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
    <article>
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

export default ParkBlowUp;