import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const dropdownRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="relative w-full max-w-[500px] mx-auto my-5"
      ref={dropdownRef}
    >
      <div
        className="p-5 border-2 border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selecte one
      </div>
      <div
        className={`${
          showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        } transform-all transition-all border-2 border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white shadow-sm`}
      >
        <div className="p-5 cursor-pointer hover:bg-gray-200">Javascript</div>
        <div className="p-5 cursor-pointer hover:bg-gray-200">ReactJS</div>
        <div className="p-5 cursor-pointer hover:bg-gray-200">VueJS</div>
      </div>
    </div>
  );
};

export default Dropdown;
