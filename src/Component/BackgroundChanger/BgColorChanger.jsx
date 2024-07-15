import React, { useState } from "react";

const BgColorChanger = () => {
  const [bgcolor, setBgColor] = useState("bg-blue-500");

  const changeColor = () => {
    const colors = [
      "bg-red-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-slate-500",
      "bg-sky-500",
      "bg-indigo-500",
      "bg-rose-500",
      "bg-fuchsia-500",
      "bg-pint-500",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };
  return (
    <>
      <div
        className={`${bgcolor} flex items-center justify-center min-h-screen`}
      >
        <div className="">
       
          <button
            onClick={changeColor}
            className="bg-white text-black rounded content-center mt-4 p-3"
          >
            Change BG Color
          </button>
        </div>
      </div>
    </>
  );
};

export default BgColorChanger;
