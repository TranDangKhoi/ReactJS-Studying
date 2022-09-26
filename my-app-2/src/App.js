import React from "react";
import { useState } from "react";
import "./App.css";
import Switch from "./components/switch/Switch";

function useToggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  function getToggleProps({ onClick, ...props } = {}) {
    return {
      onClick: () => {
        onClick && onClick(); // Nếu mà trong getToggleProps mà có 1 props là onClick thì thực hiện function onClick nằm trong props đó
        handleToggle(); // Thực hiện chức năng bật/tắt công tắc
      },
      ...props,
    };
  }
  return {
    on,
    getToggleProps,
  };
}
// Props Collection
function App() {
  const { on, getToggleProps } = useToggle();
  return (
    <div>
      <Switch {...getToggleProps({ on })}></Switch>
      <br />
      <button
        aria-label="custom-button"
        {...getToggleProps({
          onClick: () => {
            console.log("Hello");
          },
        })}
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
}

export default App;
