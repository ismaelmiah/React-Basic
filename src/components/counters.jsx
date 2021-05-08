import React, { useState } from "react";
import Counter from "./counter";
import Navbar from "./navbar";

const Counters = () => {
  const [counters, setCounter] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 4 },
    { id: 4, value: 1 },
  ]);

  const onDelete = (counter) => {
    let copyCounters = counters.filter((x) => x.id !== counter.id);
    setCounter(copyCounters);
  };

  var onIncrement = (reqcounter) => {
    var counter = [...counters];
    var idx = counter.findIndex((x) => x.id === reqcounter.id);
    counter[idx].value++;
    setCounter(counter);
  };

  var onDecrement = (reqcounter) => {
    var counter = [...counters];
    var idx = counter.findIndex((x) => x.id === reqcounter.id);
    counter[idx].value--;
    setCounter(counter);
  };

  const onReset = () => {
    setCounter([]);
  };

  const onAdd = () => {
    var counter = [...counters];
    counter.push({ id: counter.length + 1, value: 0 });
    setCounter(counter);
  };

  return (
    <div>
      <Navbar cartItem = {counters.length} hanldeReset={onReset} handleAdd={onAdd} />
      {counters.map((item) => (
        <Counter
          key={item.id}
          Counter={item}
          handleIncrement={onIncrement}
          handleDecrement={onDecrement}
          handleDelete={onDelete}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;
