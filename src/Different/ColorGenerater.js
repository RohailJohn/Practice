import React, { useState } from "react";

const ColorGenerater = () => {
  const [colors, setColors] = useState([]);

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColors([...colors, randomColor]);
  };

  return (
    <div>
      <h1>Color Palette Generator</h1>
      <button onClick={generateColor}>Generate Color</button>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {colors.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: color,
              width: "100px",
              height: "100px",
              marginRight: "10px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorGenerater;
