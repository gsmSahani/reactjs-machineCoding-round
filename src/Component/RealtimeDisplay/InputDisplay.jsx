import React, { useState } from "react";

const InputDisplay = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="bg-yellow-400 min-h-screen">
        <div className="py-48">
          <div className="bg-slate-500 w-1/2 h-48 mx-auto rounded-2xl">
            <div className="flex justify-center items-center py-12 pb-4">
              <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                className="border-solid outline-slate-200 p-2 rounded-full"
                placeholder="type here...."
              />
            </div>
              <div>

              <h3 className="text-black text-center">{input}</h3>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputDisplay;
