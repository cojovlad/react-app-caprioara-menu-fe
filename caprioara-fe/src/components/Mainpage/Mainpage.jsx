import React from "react";
import "./Mainpage.css";
import { Foodcard } from "../Foodcard/Foodcard";
const foodData = {
  Ciorbe: [
    { name: "Ciorbă de legume", price: "10.00 RON" },
    { name: "Ciorbă de pui", price: "15.00 RON" },
  ],
  "Feluri principale": [
    { name: "Friptură de porc", price: "25.00 RON" },
    { name: "Pui la grătar", price: "20.00 RON" },
  ],
  Desert: [
    { name: "Papanasi", price: "12.00 RON" },
    { name: "Tiramisu", price: "15.00 RON" },
  ],
  Bauturi: [
    { name: "Suc natural", price: "8.00 RON" },
    { name: "Cafea", price: "5.00 RON" },
  ],
};

const Mainpage = ({ category }) => {
  const foods = foodData[category] || [];

  return (
    <div className="mainpage">
      <h1>{category}</h1>
      <div className="food-container">
        {foods.map((food, index) => (
          <Foodcard key={index} name={food.name} price={food.price} />
        ))}
      </div>
    </div>
  );
};

export default Mainpage;
