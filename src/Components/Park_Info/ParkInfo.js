import "./ParkInfo.css";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ParkInfo({ parks }) {
  // const [park, setPark] = useState({});

  const id = useParams().id;

  const getParkDetails = (parks, id) => {
    const parkToView = parks.filter((parkData) => {
      if (parkData.id === id) {
        return parkData;
      }
    });
    console.log(parkToView);
  };

  useEffect(() => getParkDetails(parks, id), [id]);

  return <div>ParkInfo</div>;
}

export default ParkInfo;
