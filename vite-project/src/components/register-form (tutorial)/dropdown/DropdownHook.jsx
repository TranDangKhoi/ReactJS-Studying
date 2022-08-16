import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutside from "../../../hooks/useClickOutside";

export const data = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 3,
    value: "developer",
    text: "Developer",
  },
  {
    id: 4,
    value: "nurse",
    text: "Nurse",
  },
];
const DropdownHook = ({ control, setValue, name, dropdownLabel }) => {
  const { show, nodeRef, setShow } = useClickOutside();
  useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const [label, setLabel] = useState(dropdownLabel);
  const handleJobChoose = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };
  return (
    <div className="relative" ref={nodeRef}>
      <div
        onClick={() => setShow(!show)}
        className="p-5 cursor-pointer rounded-lg border border-gray-100 bg-white flex items-center justify-between"
      >
        <span>{label}</span>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      <div
        className={`absolute transition-all top-full left-0 w-full rounded-lg bg-white  ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {data.length > 0 &&
          data.map((item, index) => (
            <div
              className="p-5 cursor-pointer hover:bg-gray-200"
              onClick={handleJobChoose}
              data-value={item.value}
              key={item.id}
            >
              {item.text}
            </div>
          ))}
        {/* <div
          className="p-5 cursor-pointer hover:bg-gray-200"
          onClick={handleJobChoose}
          data-value="teacher"
        >
          Teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-200"
          onClick={handleJobChoose}
          data-value="doctor"
        >
          Doctor
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-200"
          onClick={handleJobChoose}
          data-value="developer"
        >
          Developer
        </div> */}
      </div>
    </div>
  );
};

export default DropdownHook;
