import React from "react";
import "./Navbar.css";
import { SidePanel } from "../Sidepanel/Sidepanel";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="title">
          Caprioara
        </a>
      </nav>

      <SidePanel />
    </div>
  );
};
