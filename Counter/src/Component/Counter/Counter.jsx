import React, { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  // const decrement = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };
  // const reset = () => {
  //   setCounter("0");
  // };
  return (
    <>
      <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold">Counter</h1>
        <div className="bg-slate-700">
          <div className="flex h-96 w-96 items-center">
            <p className=" mx-auto text-3xl">{counter}</p>
          </div>
      
          <div className="flex justify-evenly">
            <button
              onClick={()=> {if(counter > 0){setCounter(counter-1)}}}
              className="bg-blue-600 hover:bg-blue-900 text-black rounded-lg p-3 font-bold"
            >
              Decrement
            </button>
            <button
              onClick={() => setCounter(counter + 1)}
              className="bg-blue-600 hover:bg-blue-900 text-black rounded-lg p-3 font-bold"
            >
              Increment
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setCounter("0")}
              className="bg-red-600 hover:bg-red-800 text-black rounded-lg p-3 font-bold flex justify-center"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
