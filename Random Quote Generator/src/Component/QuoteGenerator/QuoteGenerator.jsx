import React, { useState } from "react";

const QuoteGenerator = () => {
  const ListOfQuotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don’t take.",
    "The best revenge is massive success.",
    "The only limit to our realization of tomorrow is our doubts of today.",
  ];

  const [currentQuote, setCurrentQuote] = useState("");
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * ListOfQuotes.length);
    setCurrentQuote(ListOfQuotes[randomIndex]);
  };
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow-md text-center max-w-md">
          <p className="text-xl italic mb-4 ">
            {currentQuote || "Click the button to generate a Quote"}
          </p>
          <button
            onClick={generateRandomQuote}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Generate Quote
          </button>
        </div>
      </div>
    </>
  );
};
export default QuoteGenerator;
