import React from "react";
import "./theme.css";
import useLocalStorage from "./UseLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world</p>
        <button onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
