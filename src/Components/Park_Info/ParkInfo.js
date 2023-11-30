import "./ParkInfo.css";
import React from "react";
import { useParams } from "react-router-dom";
import ParkBlowUp from "../ParkBlowUp/ParkBlowUp";
import PropTypes from "prop-types";

function ParkInfo({ parks, toggleVisit }) {
  const id = useParams().id;
  const parkToView = parks.filter((parkData) => parkData.id === id);

  return <ParkBlowUp park={parkToView[0]} toggleVisit={toggleVisit} />;
}

ParkInfo.propTypes = {
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

export default ParkInfo;
