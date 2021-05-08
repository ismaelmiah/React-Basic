import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.value);
  const [cssClass, setcssClass] = useState(
      "px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full",
);

  var formatCount = () => {
    if (count === 0) return "0";
    else {
      return count;
    }
  };

  var handleIncrement = () => {
    setCount(count + 1);
    console.log("handleIncrement");
  };

  var handleDecrement = () => {
    setCount(count - 1);
    console.log(count);
    console.log("handleDecrement");
  };

  const hanldeReset = () => {
    setCount(0);    
  };

  useEffect(() => {
    if(count > 0){
      setcssClass("px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full")
    }
    else if(count < 0){
      setcssClass("px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full")
    }
    else setcssClass("px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full")
  })

  return (
    <div>
      <div className="inline-flex items-center justify-center">
        <button
          className="m-2 g-blue-500 bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => handleDecrement()}
        >
          -
        </button>
      <div className="counter m-2">
        <span className={cssClass}>{formatCount()}</span>
      </div>
      <div className="Operations">
        <button
          className="m-2 border-0 outline-none g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => handleIncrement()}
        >
          +
        </button>
        <button
          className="m-2 g-blue-500 bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => props.handleDelete()}
        >
          Delete
        </button>
      </div>
    </div>
    </div>
  );
};


export default Counter;