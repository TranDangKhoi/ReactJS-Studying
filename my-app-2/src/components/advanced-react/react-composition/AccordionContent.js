import React from "react";
// Dây là 1 specialized component
const AccordionContent = ({ show, children }) => {
  return (
    <>
      {show && (
        <div className="p-4 mt-2 border border-gray-200 rounded-lg content">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionContent;
