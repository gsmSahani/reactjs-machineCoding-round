import React, { useState } from "react";
import data from "../data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleAccordionClick = (id) => {
    if (enableMultiSelection) {
      handleMultiSelection(id);
    } else {
      handleSingleSelection(id);
    }
  };

  const toggleMultiSelection = () => {
    setEnableMultiSelection(!enableMultiSelection);
    setSelected(null); 
    setSelectedIds([]); 
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900">
        <h1 className="text-white font-bold text-3xl">Accordion</h1>
        <div>
          <button
            onClick={toggleMultiSelection}
            className={`text-white bg-blue-500 hover:bg-blue-800 rounded-lg p-2 mb-4 mt-4 ${
              enableMultiSelection ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
          </button>
        </div>
        <div className="max-w-md my-3 w-full">
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="border rounded p-2 cursor-pointer mb-4"
              onClick={() => handleAccordionClick(dataItem.id)}
            >
              <h3 className="flex justify-between items-center text-white font-bold italic">
                {dataItem.question}
                <span>{(enableMultiSelection && selectedIds.includes(dataItem.id)) || (!enableMultiSelection && selected === dataItem.id) ? "-" : "+"}</span>
              </h3>
              {((!enableMultiSelection && selected === dataItem.id) || (enableMultiSelection && selectedIds.includes(dataItem.id))) && (
                <p className="mt-2 text-gray-300">{dataItem.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordian;
