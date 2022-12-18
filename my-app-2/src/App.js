import React from "react";
import { useState } from "react";
import "./App.css";
import Count from "./components/useMemo, useCallback/Count";

function App() {
  const [filter, setFilter] = useState("");
  const calculate = () => {
    setFilter("");
  };
  return (
    <>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate}></Count>
    </>
  );
}

export default App;
