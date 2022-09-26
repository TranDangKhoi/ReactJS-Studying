import React from "react";
import { useState } from "react";
import "./App.css";
import Accordion from "./components/advanced-react/react-composition/Accordion";
import Editable from "./components/advanced-react/react-composition/Editable";
import HandleValuePropsRender from "./components/advanced-react/render-props/HandleValuePropsRender";
import Switch from "./components/switch/Switch";

function useToggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  return { on, handleToggle };
}

function App() {
  const { on, handleToggle } = useToggle();
  return (
    <div>
      <Switch on={on} onClick={handleToggle}></Switch>
      <br />
      <button aria-label="custom-button">{on ? "on" : "off"}</button>
    </div>
  );
}

export default App;
