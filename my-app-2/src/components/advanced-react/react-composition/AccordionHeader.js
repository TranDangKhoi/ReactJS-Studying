import React from "react";
import { useAccordion } from "../../../contexts/accordion-context";
// Đây là 1 specialize component
const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
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
