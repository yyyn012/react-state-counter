import React from "react";

function Tool({ count, setCount }) {
  const increaseHandler = (e) => {
    setCount((count) => count + 1);
  };
  const decreaseHandler = (e) => {
    setCount((count) => count - 1);
  };
  const resetHandler = (e) => {
    setCount((count) => (count = 0));
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default Tool;
