import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  //   const decrement = () => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }
  //   };
  //   const reset = () => {
  //     setCount(0);
  //   };
  return (
    <>
      <div className="bg-yellow-400 min-h-screen">
        <div className="py-24">
          <div className="py-12 bg-red-700 h-96 w-96 mx-auto rounded-lg">
            <div className="bg-gray-400 h-52 w-52 mx-auto content-center rounded-xl">
              <h1 className="text-3xl font-bold text-gray-650 text-center">
                {count}
              </h1>
            </div>
            <div className="flex justify-center p-3 gap-4">
              <button
                className="bg-red-300 rounded-full p-2 font-bold"
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
              >
                Decrement(-)
              </button>
              <button
                className="bg-green-300 rounded-full p-2 font-bold"
                onClick={() => setCount(count + 1)}
              >
                Increment(+)
              </button>
            </div>
            <div className="text-center">
              <button
                className="bg-black text-white rounded-2xl p-2 font-bold"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
