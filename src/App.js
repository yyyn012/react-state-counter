import React, { useState } from "react";
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
      <h1>Counter</h1>

      <button onClick={add}> + </button>
      {count}
      <button onClick={sub}> - </button>
    </div>
  );
}

export default App;
