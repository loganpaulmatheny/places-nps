import "./Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav-bar-sticky">
      <div className="logo-container">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="adventure sign"
        />
      </div>
      <NavLink to={`/`}>
        <button className="nav-button">Home</button>
      </NavLink>
      <NavLink to={`/visit`}>
        <button className="nav-button">Visited</button>
      </NavLink>
    </div>
  );
}

export default Navigation;
