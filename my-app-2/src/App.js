import React from "react";
import "./App.css";
import CounterControlProps from "./components/control-props/CounterControlProps";

// Props Collection
function App() {
  return (
    <div>
      <CounterControlProps
        initialValue={5}
        onChange={() => {}}
      ></CounterControlProps>
    </div>
  );
}

export default App;
