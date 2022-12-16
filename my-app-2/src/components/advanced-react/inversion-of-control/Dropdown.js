import React from "react";
import { useState } from "react";

const Dropdown = ({
  options,
  placeholder = "Please select an option",
  inputPlaceholder = "Search for an option",
  onChange = () => {},
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer placeholder"
        onClick={handleToggleDropdown}
      >
        {placeholder}
      </div>
      {show && (
        <div className="border border-gray-300 rounded-lg option-list">
          <div className="p-3">
            <input
              type="text"
              placeholder={inputPlaceholder}
              className="w-full p-4 border border-gray-300 outline-none"
              onChange={onChange}
            />
          </div>
          {options.length > 0 &&
            options.map((option) => (
              <div
                key={option.title}
                className="p-4 cursor-pointer option-item"
                onClick={option.onClick}
              >
                {option.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
