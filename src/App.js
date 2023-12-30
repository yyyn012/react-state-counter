import React, { useState } from "react";
import "./App.css";
import Tool from "./Tool";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Tool count={count} setCount={setCount} />
    </div>
  );
}

export default App;
