import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import ParkInfo from "../Park_Info/ParkInfo";
import Visit from "../Visit/Visit";
import Error from "../Error/Error";
import { useEffect, useState } from "react";
// import mockData from "../../Mock_Data/MockData";
import { cleanParksData } from "../../apiCalls";
import { getParks } from "../../apiCalls";
import { NavLink } from "react-router-dom";
function App() {
  const [parks, setParks] = useState([]);
  const [error, setError] = useState("");

  function getParksData() {
    getParks()
      .then((data) => {
        const parkData = cleanParksData(data);
        setParks(parkData);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "500") {
          setError(
            "Looks like the compass might be broke, please try again later!"
          );
        } else {
          setError(
            "The trail is closed for the season, check back in the warmer months!"
          );
        }
      });
  }

  useEffect(() => {
    clearError();
    getParksData();
  }, []);

  const toggleVisit = (id) => {
    const updatedParks = parks.map((park) => {
      if (park.id === id) {
        return { ...park, visited: !park.visited };
      }
      return park;
    });
    setParks(updatedParks);
  };

  const clearError = () => {
    setError("");
  };

  return (
    <>
      <Navigation />
      <Routes>
        {error ? (
          <Route path="/" element={<Error error={error} />}></Route>
        ) : (
          <Route
            path="/"
            element={<Home parks={parks} toggleVisit={toggleVisit} />}
          ></Route>
        )}
        <Route
          path="/park/:id"
          element={<ParkInfo parks={parks} toggleVisit={toggleVisit} />}
        ></Route>
        <Route
          path="/visit"
          element={<Visit parks={parks} toggleVisit={toggleVisit} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
