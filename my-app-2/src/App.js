import React from "react";
import { useState } from "react";
import "./App.css";
import ModalBase from "./components/Advanced Portal/ModalBase";
import Portal from "./components/Advanced Portal/Portal";

function App() {
  const [openModalBase, setOpenModalBase] = useState(false);
  return (
    <>
      <button
        className="p-5 text-center text-white bg-blue-500 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="p-10 bg-white rounded-lg w-full max-w-[320px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero
          iste eaque eos repellendus corporis ipsa quas alias aperiam dolore,
          consequatur quibusdam, maxime ipsum dolorem expedita? Repudiandae
          nihil perspiciatis saepe.
        </div>
      </ModalBase>
    </>
  );
}

export default App;
