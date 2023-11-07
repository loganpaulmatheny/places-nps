import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import ParkInfo from "../Park_Info/ParkInfo";
import Visit from "../Visit/Visit";
import Error from "../Error/Error";
import { useEffect, useState } from "react";
import mockData from "../../Mock_Data/MockData";
import { cleanParkData } from "../../apiCalls";

function App() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const parkData = cleanParkData(mockData);
    setParks(parkData);
  }, []);

  return (
    <>
      <Routes>
        {/* {error ? (
          <Route path="/" element={<Error />}></Route>
        ) : (
          <Route path="/" element={<Home />}></Route>
        )} */}
        <Route path="/" element={<Home parks={parks} />}></Route>
        <Route path="/park/:id" element={<ParkInfo />}></Route>
        <Route path="/visit" element={<Visit />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
