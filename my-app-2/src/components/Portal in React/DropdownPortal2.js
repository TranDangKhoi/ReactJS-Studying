import React, { useState } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownPortal2 = () => {
  const { nodeRef, setShow, show } = useClickOutside(false);
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    console.log(nodeRef.current.getBoundingClientRect());
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div
      className="relative w-full max-w-[500px] mx-auto my-5"
      ref={nodeRef}
    >
      <div
        className="w-full p-5 border-2 border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selecte one
      </div>
      {show && <DropdownList coords={coords} />}
    </div>
  );
};

export default DropdownPortal2;

function DropdownList({ coords }) {
  if (typeof document === "undefined") return <div className="dropdown"></div>;
  return createPortal(
    <div
      className={`border-2 border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white shadow-sm`}
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-5 cursor-pointer hover:bg-gray-200">Javascript</div>
      <div className="p-5 cursor-pointer hover:bg-gray-200">ReactJS</div>
      <div className="p-5 cursor-pointer hover:bg-gray-200">VueJS</div>
    </div>,
    document.querySelector("body"),
  );
}
