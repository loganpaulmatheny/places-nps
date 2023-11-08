import "./Card.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Card({ id, fullname, image_path, visited, toggleVisit }) {
  function handleToggle() {
    toggleVisit(id); // Pass the ID to the toggleVisit function
  }
  console.log(image_path);
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          color: "white",
          justifyContent: "end",
          backgroundImage: `url(${image_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          height: "220px", // Limit the height to 150px
          width: "100%", // Set a maximum width while maintaining aspect ratio
          borderTopLeftRadius: "10px", // Adjust the radius value as needed
          borderTopRightRadius: "10px", // A
        }}
      >
        <h2>{fullname}</h2>
      </div>
      {!visited ? (
        <img
          className="visit-icon"
          src={process.env.PUBLIC_URL + "/toVisit.png"}
          alt="an empty trail signpost"
          onClick={handleToggle}
        />
      ) : (
        <img
          className="visit-icon"
          src={process.env.PUBLIC_URL + "/visited.png"}
          alt="a colored trail signpost"
          onClick={handleToggle}
        />
      )}
      <div style={{ marginTop: "15px" }}>
        <NavLink to={`/park/${id}`} className="nav-link">
          <img
            className="arrow-icon"
            src={process.env.PUBLIC_URL + "/arrow.png"}
            alt="arrow with square around it"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
