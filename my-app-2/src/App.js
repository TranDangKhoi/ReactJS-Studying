import React from "react";
import { useState } from "react";
import "./App.css";
import Switch from "./components/switch/Switch";

function useToggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  // toggleProps
  return {
    on,
    toggleProps: {
      onClick: handleToggle,
    },
  };
}
// Props Collection
function App() {
  const { on, toggleProps } = useToggle();
  return (
    <div>
      <Switch on={on} {...toggleProps}></Switch>
      <br />
      <button aria-label="custom-button">{on ? "on" : "off"}</button>
    </div>
  );
}

export default App;
