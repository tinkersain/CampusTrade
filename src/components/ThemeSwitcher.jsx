import React, { useState } from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <h1>Theme Switcher</h1>
        <p>Click the button to toggle between Light and Dark mode.</p>
        <button onClick={() => setDarkMode(!darkMode)}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
