import "./Home.css";
import React from "react";
import Parks from "../Parks/Parks";

function Home({ parks }) {
  return (
    <div>
      <Parks parks={parks} />
    </div>
  );
}

export default Home;
