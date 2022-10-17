import React from "react";
import { useState } from "react";
import "./App.css";
import DropdownPortal2 from "./components/Portal in React/DropdownPortal2";
import Modal from "./components/Portal in React/Modal";
import Modal2 from "./components/Portal in React/Modal2";
import Portal from "./components/Portal in React/Portal";
import Tooltip from "./components/Portal in React/Tooltip";
import Tooltip2 from "./components/Portal in React/Tooltip2";
// Props Collection
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 m-5 text-white bg-blue-500 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        fuga accusamus alias sunt. Maiores dolorum incidunt voluptate repellat
        libero? Minus nobis blanditiis distinctio a laborum quos corrupti omnis
        culpa eos?
      </div>
      <div className="overflow-hidden">
        <DropdownPortal2></DropdownPortal2>
      </div>
      <div className="p-10">
        <Tooltip2
          children={"This is a very cool tooltip!"}
          text={"Hello you <3"}
        ></Tooltip2>
      </div>
    </>
  );
}

export default App;
