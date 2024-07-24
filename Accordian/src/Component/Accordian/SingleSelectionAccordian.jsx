import React, { useState } from "react";
import data from "../data";

const SingleSelectionAccordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900">
        <h1 className="text-white font-bold text-3xl">Accordian</h1>
        <div className="max-w-md my-3 w-full">
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="border rounded p-2 cursor-pointer mb-4"
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <h3 className="flex justify-between items-center text-white font-bold italic">
                {dataItem.question}
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </h3>
              {selected === dataItem.id && (
                <p className="mt-2 text-gray-300">{dataItem.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleSelectionAccordian;
