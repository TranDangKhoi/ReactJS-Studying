import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";

const TooltipAdvanced = ({ overlay, tooltipText, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({});
  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div className="relative inline-block">
      <CSSTransition in={visible} timeout={150} classNames="fade" unmountOnExit>
        {(status) => (
          <Portal overlay={overlay} visible={status !== "exited"}>
            <p
              className="absolute z-[9999] transition-all inline-block max-w-[200px] p-3 rounded-xl text-white -translate-y-full -translate-x-1/2 text-center bg-black tooltip"
              style={{
                top: coords.top - coords.height / 2 + window.scrollY,
                left: coords.left + coords.width / 2,
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {tooltipText}
      </div>
    </div>
  );
};

export default TooltipAdvanced;
