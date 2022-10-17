import React from "react";
import { createPortal } from "react-dom";
// createPortal

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return createPortal(
    <div
      className={`align-modal fixed transition-all inset-0 z-50 flex items-center justify-center p-5 ${
        open ? "" : "opacity-0 invisible "
      }`}
    >
      <div
        className="absolute inset-0 bg-black overlay bg-opacity-30"
        onClick={handleClose}
      ></div>
      <div className="modal-content bg-white relative z-10 p-10 rounded-lg w-full max-w-[512px]">
        <span
          className="absolute flex items-center justify-center p-2 bg-gray-100 rounded-full cursor-pointer close -top-2 -right-2"
          onClick={handleClose}
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
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
