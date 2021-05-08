import React from "react";

const navbar = (props) => {
  console.log(props);
  return (
    <div>
      <h4 className="inline-flex">
        Cart 
        <span className="px-5 mx-4 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">{props.cartItem}</span>
      </h4>
      <button onClick={props.hanldeReset} className="m-2 g-blue-500 bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Reset</button>
      <button onClick={props.handleAdd} className="m-2 g-blue-500 bg-yellow-200 text-white font-bold py-2 px-4 rounded-full">Add</button>
    </div>
  );
};

export default navbar;