import "./ParkBlowUp.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// == See comments below for solution to error thrown when reloading on ParkInfo Route ==

function ParkBlowUp({ park = {}, toggleVisit = () => {} }) {
  const navigate = useNavigate();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // This will force a reload of home page and then immediately route to the blowup page!
  // The beforeunload event is just before you leave a page
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const isReloading = event.type === "beforeunload";
      if (isReloading && !isInitialLoad) {
        console.log("redirect occured");
        navigate("/");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    setIsInitialLoad(false);

    // Cleanup function, prevent a memory link
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  function handleKeyPress(event, parkId) {
    if (event.key === "Enter") {
      toggleVisit(parkId);
    }
  }

  const images =
    //  Check and see if park is undefined before mapping over it and throwing an error
    park.images?.map((image) => (
      <img
        key={image.url}
        className="blow-up-image"
        src={image.url}
        alt={image.altText}
      />
    )) || [];

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
            tabIndex="0"
            onKeyDown={(event) => handleKeyPress(event, park.id)}
          />
        ) : (
          <img
            className="visit-icon-blowup"
            src={process.env.PUBLIC_URL + "/visited.png"}
            alt="a colored trail signpost"
            onClick={() => toggleVisit(park.id)}
            tabIndex="0"
            onKeyDown={(event) => handleKeyPress(event, park.id)}
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
