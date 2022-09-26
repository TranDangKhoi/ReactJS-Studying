import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AccordionContext = createContext();

function AccordionProvider(props) {
  const [show, setShow] = useState();
  const value = {
    show,
    setShow,
  };
  return (
    <AccordionContext.Provider
      value={value}
      {...props}
    ></AccordionContext.Provider>
  );
}

function useAccordion() {
  const context = useContext(AccordionContext);
  if (typeof context === "undefined") {
    throw new Error("useAccordion must be used within AccordionProvider");
  }
  return context;
}

export { AccordionProvider, useAccordion };
