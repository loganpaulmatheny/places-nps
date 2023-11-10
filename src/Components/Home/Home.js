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
