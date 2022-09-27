import React from "react";
import { useState } from "react";
import "./App.css";
import CounterControlProps from "./components/control-props/CounterControlProps";

// Props Collection
function App() {
  // Giả dụ đây là đoạn code mà dev khác muốn can thiệp vào
  const [count, setCount] = useState(5);
  const handleCountChange = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <CounterControlProps
        value={count}
        onChange={handleCountChange}
      ></CounterControlProps>
    </div>
  );
}

export default App;
