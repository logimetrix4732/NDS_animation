import React, { useEffect, useState } from "react";

const ColorSwitcher = ({ isOpen, toggle }) => {
  const [themeColor, setThemeColor] = useState("#5b8c51");

  useEffect(() => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
      setThemeColor(savedColor);
      document.documentElement.style.setProperty("--primary-color", savedColor);
      document.documentElement.style.setProperty("--theme-color", savedColor);
    } else {
      document.documentElement.style.setProperty("--primary-color", themeColor);
      document.documentElement.style.setProperty("--theme-color", themeColor);
    }
  }, []);

  const handleColorChange = (color) => {
    setThemeColor(color);
    localStorage.setItem("themeColor", color);
    document.documentElement.style.setProperty("--primary-color", color);
    document.documentElement.style.setProperty("--theme-color", color);
  };

  const colors = [
    "#5b8c51",
    "#684DF4",
    "#086ad8",
    "#FC3737",
    "#8a2be2",
    "#104CBA",
    "#ffbf4f",
    "#323F7C",
    "#0e2bc5",
    "#F79C53",
    "#6957af",
  ];

  return (
    <div className={`color-scheme-wrap ${isOpen ? "active" : ""}`}>
      <h4 className="color-scheme-title">
        <i className="fa-solid fa-palette" /> Style Switcher
      </h4>
      <div className="color-switch-btns">
        {colors.map((color, idx) => (
          <button
            key={idx}
            onClick={() => handleColorChange(color)}
            style={{
              backgroundColor: color,
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              margin: "5px",
              border:
                themeColor === color ? "3px solid #000" : "2px solid #fff",
              cursor: "pointer",
            }}
          >
            <i className="fa-solid fa-droplet" style={{ color: "#fff" }} />
          </button>
        ))}
      </div>
      <button onClick={toggle} className="th-btn" style={{ marginTop: "15px" }}>
        Close
      </button>
    </div>
  );
};

export default ColorSwitcher;
