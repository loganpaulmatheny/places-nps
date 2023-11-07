import "./Card.css";
import React from "react";

function Card({ id, fullname }) {
  return (
    <div className=".card">
      <h2>{fullname}</h2>
      <p>{id}</p>
    </div>
  );
}

export default Card;
