import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  var formatCount = () => {
    if (count === 0) return "Zero";
    else return count;
  };

  var handleIncrement = () => {
    setCount(count + 1);
    console.log("clicked");
  };

  var handleDecrement = () => {
    setCount(count-1);
    console.log("clicked");
  };

  const hanldeReset = () => {
      setCount(0);
  }

  return (
    <div>
      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
        {formatCount()}
      </span>
      <button
        className="g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => handleIncrement()}
      >
        Increment
      </button>
      <button
        className="g-blue-500 bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => handleDecrement()}
      >
        Decrement
      </button>
      <button
        className="g-blue-500 bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => hanldeReset()}
      >
        Reset
      </button>
    </div>
  );
};
