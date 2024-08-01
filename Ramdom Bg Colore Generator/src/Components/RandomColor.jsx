import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const randomColorUtils = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleGenerateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtils(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };
  const handleGenerateRandomRgbColor = () => {
    const r = randomColorUtils(256);
    const g = randomColorUtils(256);
    const b = randomColorUtils(256);

    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") handleGenerateRandomRgbColor();
    else handleGenerateRandomHexColor();
  }, [typeOfColor]);
  return (
    <>
      <div
        className=""
        style={{
          height: "100vh",
          width: "100vw",
          background: color,
          color: "White",
          textAlign: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <button
          onClick={() => setTypeOfColor("hex")}
          style={{
            padding: "4px",
            margin: "10px",
            background: "white",
            color: "black",
          }}
        >
          HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          style={{
            padding: "4px",
            margin: "10px",
            background: "white",
            color: "black",
          }}
        >
          RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleGenerateRandomHexColor
              : handleGenerateRandomRgbColor
          }
          style={{
            padding: "4px",
            margin: "10px",
            background: "white",
            color: "black",
          }}
        >
          Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
