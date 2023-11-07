import "./Card.css";
import React from "react";
import { NavLink, navLink } from "react-router-dom";

function Card({ id, fullname }) {
  return (
    <NavLink to={`/park/${id}`} className="nav-link">
      <div className="card">
        <h2>{fullname}</h2>
        <p>{id}</p>
      </div>
    </NavLink>
  );
}

export default Card;
