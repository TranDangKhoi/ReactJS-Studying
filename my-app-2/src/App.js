import React from "react";
import { useState } from "react";
import "./App.css";
import CounterControlProps from "./components/control-props/CounterControlProps";

// Props Collection
function App() {
  // Giả dụ đây là đoạn code mà dev khác muốn can thiệp vào
  const [count, setCount] = useState(5);
  const handleCountChange = (newCount) => {
    // setCount((count) => count + 1);
    // Thử thêm một chút code xử lí logic xíu nha
    if (newCount > 10) {
      setCount(0);
    } else {
      setCount(newCount);
    }
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
