import React, { useState, useEffect } from "react";

const Counter = (props) => {
  console.log(props)
  const [cssClass, setcssClass] = useState(
      "px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full",
);

  useEffect(() => {
    if(props.Counter.value > 0){
      setcssClass("px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full")
    }
    else if(props.Counter.value < 0){
      setcssClass("px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full")
    }
    else setcssClass("px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full")
  })

  return (
    <div>
      <div className="inline-flex items-center justify-center">
        <button
          className="m-2 g-blue-500 bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => props.handleDecrement(props.Counter)}
        >
          -
        </button>
      <div className="counter m-2">
        <span className={cssClass}>{props.Counter.value}</span>
      </div>
      <div className="Operations">
        <button
          className="m-2 border-0 outline-none g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() =>  props.handleIncrement(props.Counter)}
        >
          +
        </button>
        <button
          className="m-2 g-blue-500 bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => props.handleDelete(props.Counter)}
        >
          Delete
        </button>
      </div>
    </div>
    </div>
  );
};


export default Counter;