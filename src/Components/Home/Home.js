import "./Home.css";
import React from "react";
import Parks from "../Parks/Parks";

function Home({ parks, toggleVisit }) {
  return (
    <div>
      <Parks parks={parks} toggleVisit={toggleVisit} />
    </div>
  );
}

export default Home;
