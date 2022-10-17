import React from "react";
import { createPortal } from "react-dom";

const Modal2 = () => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return createPortal(<div>hello</div>, document.querySelector("body"));
};

export default Modal2;
