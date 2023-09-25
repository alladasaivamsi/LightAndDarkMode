import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";

const DarkAndLightMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="links">
      <Switch
        checked={darkMode}
        onClick={() => {
          changeMode();
        }}
      />
      <span>{localStorage.getItem("theme") === "dark" ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
};

export default DarkAndLightMode;
