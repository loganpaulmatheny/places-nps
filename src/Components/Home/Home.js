import "./Home.css";
import React from "react";
import Parks from "../Parks/Parks";
import PropTypes from "prop-types";

function Home({ parks, toggleVisit }) {
  return (
    <div className="home-container">
      <Parks parks={parks} toggleVisit={toggleVisit} />
    </div>
  );
}

Home.propTypes = {
  parks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      fullName: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
      directionsUrl: PropTypes.string,
      address: PropTypes.object,
      images: PropTypes.array,
      weatherInfo: PropTypes.string,
    })
  ).isRequired,

  toggleVisit: PropTypes.func.isRequired,
};

export default Home;

// return {
//   id: park.id,
//   fullName: park.fullName ?? "No Name",
//   visited: false,
//   url: park.url || "No website",
//   description: park.description || "No description available",
//   directionsUrl: park.directionsUrl || "No directions available",
//   address: {
//     street: park.addresses?.[0]?.line1 || "No street address",
//     city: park.addresses?.[0]?.city || "No city",
//     stateCode: park.addresses?.[0]?.stateCode || "NA",
//     zip: park.addresses?.[0]?.postalCode || "00000",
//   },
//   images: park.images || [],
//   weatherInfo: park.weatherInfo || "Weather information not available",
// };
