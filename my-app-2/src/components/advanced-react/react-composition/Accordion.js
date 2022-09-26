import React from "react";
import { AccordionProvider } from "../../../contexts/accordion-context";
// import useToggle from "../../../hooks/useToggle";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
// Specialized Component
// Container component
const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
