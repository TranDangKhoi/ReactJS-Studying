import React from "react";
import { useState } from "react";
import "./App.css";
import ModalAdvanced from "./components/Advanced Portal/ModalAdvanced";
import ModalBase from "./components/Advanced Portal/ModalBase";
import Portal from "./components/Advanced Portal/Portal";

function App() {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        className="p-5 text-center text-white bg-blue-500 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <button
        className="p-5 text-center text-white bg-blue-500 rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open login modal
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
      <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)}>
        <div className="modal-content bg-white relative z-10 p-10 rounded-lg w-full max-w-[512px]">
          <span
            className="absolute flex items-center justify-center p-2 bg-gray-100 rounded-full cursor-pointer close -top-2 -right-2"
            onClick={() => setOpenModal(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
          <h2 className="text-[40px] text-center mb-5 text-black font-medium">
            Welcome back
          </h2>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="text-sm cursor-pointer">
              Email address
            </label>
            <input
              type="email"
              className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="text-sm cursor-pointer">
              Password
            </label>
            <input
              type="password"
              className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full p-4 text-base font-medium text-white bg-blue-500 rounded-lg">
            Sign In
          </button>
        </div>
      </ModalAdvanced>
    </>
  );
}

export default App;
