import React from "react";
import useClickOutside from "../../../hooks/useClickOutside";

const Dropdown = () => {
  const { nodeRef, setShow, show } = useClickOutside(false);
  return (
    <>
      <DropdownBlock
        nodeRef={nodeRef}
        setShow={setShow}
        show={show}
      />
      ;
      <DropdownBlock
        nodeRef={nodeRef}
        setShow={setShow}
        show={show}
      />
      ;
    </>
  );
};

export default Dropdown;

function DropdownBlock({ nodeRef, setShow, show }) {
  return (
    <div
      className="relative w-full max-w-[500px] mx-auto my-5"
      ref={nodeRef}
    >
      <div
        className="w-full p-5 border-2 border-gray-200 rounded-lg cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selecte one
      </div>
      <div
        className={`${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        } transform-all transition-all border-2 border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white shadow-sm`}
      >
        <div className="p-5 cursor-pointer hover:bg-gray-200">Javascript</div>
        <div className="p-5 cursor-pointer hover:bg-gray-200">ReactJS</div>
        <div className="p-5 cursor-pointer hover:bg-gray-200">VueJS</div>
      </div>
    </div>
  );
}
