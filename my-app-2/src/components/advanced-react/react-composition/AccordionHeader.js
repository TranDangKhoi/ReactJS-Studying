import React from "react";
// Đây là 1 specialize component
const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div
      className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg cursor-pointer select-none header"
      onClick={handleToggleShow}
    >
      <span className="">{children}</span>
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
