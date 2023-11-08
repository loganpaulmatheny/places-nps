import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import ParkInfo from "../Park_Info/ParkInfo";
import Visit from "../Visit/Visit";
import Error from "../Error/Error";
import { useEffect, useState } from "react";
// import mockData from "../../Mock_Data/MockData";
import { cleanParksData } from "../../apiCalls";
import { getParks } from "../../apiCalls";

function App() {
  const [parks, setParks] = useState([]);

  function getParksData() {
    getParks().then((data) => {
      const parkData = cleanParksData(data);
      setParks(parkData);
    });
    // .catch((error) => {
    //   console.log(error.message);
    //   if (error.message === "404") {
    //     setError("Try checking your URL");
    //   } else {
    //     setError("There may be an error on our end, please try again later");
    //   }
    // });
  }

  useEffect(() => {
    getParksData();
    // const parkData = cleanParkData(mockData);
    // setParks(parkData);
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
