import React, { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./App.css";
import Count from "./components/useMemo, useCallback/Count";

function App() {
  const [filter, setFilter] = useState("");
  // useCallback(() => callback, [deps]);
  const calculate = useCallback(() => {
    setFilter("");
  }, [setFilter]);
  // useMemo(() => value, [deps]);
  const data = useMemo(() => ({ success: false }), []);
  return (
    <>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate} data={data}></Count>
    </>
  );
}

export default App;
