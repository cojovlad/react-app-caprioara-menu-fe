import React from "react";
import "./Foodcard.css";

export const Foodcard = ({ name, price }) => {
  return (
    <div className="food-item">
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};
