import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
const Stars = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
  }
  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex);
  }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <>
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
          </>
        );
      })}
    </div>
  );
};
export default Stars;
