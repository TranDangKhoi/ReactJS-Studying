import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import useHover from "../../hooks/useHover";

const Tooltip = () => {
  const { hovered, nodeRef, setHovered } = useHover();
  const [coords, setCoords] = useState({});
  function handleHoverText() {
    setCoords(nodeRef.current.getBoundingClientRect());
    console.log(nodeRef.current.getBoundingClientRect());
  }
  return (
    <span
      className={`relative left-5 text-lg ${hovered && "text-red-500"}`}
      ref={nodeRef}
      onMouseOver={handleHoverText}
    >
      Hello
      <TooltipContent
        coords={coords}
        hovered={hovered}
      >
        This is a tooltip
      </TooltipContent>
    </span>
  );
};

function TooltipContent({ coords, hovered, children }) {
  if (typeof document === "undefined") return;
  return createPortal(
    <div
      className={`absolute top-0 left-0 flex items-center justify-center p-5 rounded-lg text-lg text-center text-white bg-black ${
        hovered ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{
        height: coords.height,
        width: coords.width,
        top: coords.top - coords.height + window.scrollY - coords.height,
        left: coords.left,
      }}
    >
      {children}
    </div>,
    document.querySelector("body"),
  );
}

export default Tooltip;
