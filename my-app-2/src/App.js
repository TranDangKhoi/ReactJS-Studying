import React from "react";
import "./App.css";
import Sidebar2 from "./components/useRef, Custom Hook/practice sidebarmenu/Sidebar2";
import Sidebar from "./components/useRef, Custom Hook/sidebar-menu/Sidebar";
import useClickOutside from "./hooks/useClickOutside";

function App() {
  const { nodeRef, setShow, show } = useClickOutside("span", false);
  return (
    <div>
      <span
        className="mx-auto my-5 p-5 bg-green-400 text-white rounded-sm cursor-pointer"
        onClick={() => setShow(true)}
      >
        Show nav
      </span>
      <Sidebar2 show={show} ref={nodeRef}></Sidebar2>
    </div>
  );
}

export default App;
