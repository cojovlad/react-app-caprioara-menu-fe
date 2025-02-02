import React from "react";
import "./Sidepanel.css";

export const SidePanel = ({ onCategorySelect }) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="side-panel">
      <ul className="side-panel-links">
        <li onClick={() => handleCategoryClick("Ciorbe")}>Ciorbe</li>
        <li onClick={() => handleCategoryClick("Feluri principale")}>
          Feluri principale
        </li>
        <li onClick={() => handleCategoryClick("Desert")}>Desert</li>
        <li onClick={() => handleCategoryClick("Bauturi")}>Bauturi</li>
      </ul>
    </div>
  );
};
