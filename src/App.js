import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={add}> + </button>
      {count}
      <button onClick={sub}> - </button>
    </div>
  );
}

export default App;
