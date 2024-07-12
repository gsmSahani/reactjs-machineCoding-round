import React, { useState } from "react";
import LightOn from "/assets/lightOn.jpg";
import LightOff from "/assets/lightOff.jpg";
const Toggle = () => {
    
  const [isToggled, setIsToggled] = useState(false);
  const handlebuttonOn = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <div className="h-72 w-72 mx-auto py-10">
          <img
            src={isToggled ? LightOn : LightOff}
            alt=""
            className="object-cover h-96 w-96 pb-4"
          />
        </div>
        <div className="text-center py-32">
          <button
            onClick={handlebuttonOn}
            className="bg-red-800 p-4 rounded-2xl content-center"
          >
            {isToggled ? "off" : "on"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Toggle;
