import React, { useState, useEffect } from "react";
import "./App.css";
import Tool from "./Tool";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`${Date()}`);
  }, []);
  return <Tool count={count} setCount={setCount} />;
}

export default App;
