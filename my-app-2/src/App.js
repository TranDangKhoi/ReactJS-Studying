import React from "react";
import { useState } from "react";
import "./App.css";
import ModalAdvanced from "./components/Advanced Portal/ModalAdvanced";
import ModalBase from "./components/Advanced Portal/ModalBase";
import Portal from "./components/Advanced Portal/Portal";
import TooltipAdvanced from "./components/Advanced Portal/TooltipAdvanced";

function App() {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen gap-x-5">
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
          <TooltipAdvanced
            overlay={false}
            tooltipText={"A smaller welcome back"}
          >
            Hello my child!
          </TooltipAdvanced>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero
          iste eaque eos repellendus corporis ipsa quas alias aperiam dolore,
          consequatur quibusdam, maxime ipsum dolorem expedita? Repudiandae
          nihil perspiciatis saepe.
        </div>
      </ModalBase>
      <ModalAdvanced
        heading={"Welcome back!"}
        visible={openModal}
        onClose={() => setOpenModal(false)}
        bodyClassName="w-full max-w-[512px] relative z-10 p-10 bg-white rounded-lg modal-content"
      >
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
      </ModalAdvanced>
      <TooltipAdvanced overlay={false} tooltipText={"Tooltip"}>
        This is a tooltip
      </TooltipAdvanced>
    </div>
  );
}

export default App;
