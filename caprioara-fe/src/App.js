import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Mainpage from "./components/Mainpage/Mainpage";
import Footer from "./components/Footer/Footer";
import { SidePanel } from "./components/Sidepanel/Sidepanel";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Ciorbe");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app-container">
      <Navbar />
      <SidePanel onCategorySelect={handleCategorySelect} />
      <main className="main-content">
        <Mainpage category={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
