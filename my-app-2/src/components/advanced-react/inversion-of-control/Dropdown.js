import React from "react";
import { useState } from "react";

const Dropdown = ({
  options,
  placeholder = "Please select an option",
  inputPlaceholder = "Search for an option",
  visibleIconCheck = false,
  visibleSearch = false,
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
            {visibleSearch && (
              <input
                type="text"
                placeholder={inputPlaceholder}
                className="w-full p-4 border border-gray-300 outline-none"
                onChange={onChange}
              />
            )}
          </div>
          {options.length > 0 &&
            options.map((option) => (
              <div
                key={option.title}
                className="flex items-center justify-between p-4 cursor-pointer option-item"
                onClick={option.onClick}
              >
                <span>{option.title}</span>
                {visibleIconCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
