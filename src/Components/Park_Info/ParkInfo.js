import "./ParkInfo.css";
import React from "react";
import { useParams } from "react-router-dom";
import ParkBlowUp from "../ParkBlowUp/ParkBlowUp";

function ParkInfo({ parks, toggleVisit }) {
  const id = useParams().id;
  const parkToView = parks.filter((parkData) => {
    if (parkData.id === id) {
      return parkData;
    }
  });

  return <ParkBlowUp park={parkToView[0]} toggleVisit={toggleVisit} />;
}

export default ParkInfo;
