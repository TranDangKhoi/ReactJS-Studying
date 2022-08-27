import React from "react";
import useHover from "../../hooks/useHover";

const Tooltip = ({ text }) => {
  const { hovered, nodeRef } = useHover();
  return (
    <div className="relative text-lg">
      Hello
      <span className="absolute bottom-0 left-0 flex items-center justify-center p-3 text-sm text-center text-white bg-black"></span>
    </div>
  );
};

export default Tooltip;
