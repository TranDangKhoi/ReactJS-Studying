import { useContext } from "react";
import { createContext } from "react";
import useToggle from "../hooks/useToggle";

const AccordionContext = createContext();

function AccordionProvider(props) {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  const value = {
    show,
    handleToggleShow,
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
