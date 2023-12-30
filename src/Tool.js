import React from "react";

function Tool({ count, setCount }) {
  const addHandler = (e) => {
    setCount((count) => count + 1);
  };

  const minusHandler = (e) => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={addHandler}>Increment</button>
      <button onClick={minusHandler}>Decrease</button>
    </div>
  );
}

export default Tool;
