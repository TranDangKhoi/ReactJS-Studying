import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownHook = ({ control, setValue, name }) => {
  const { show, nodeRef, setShow } = useClickOutside();
  const jobValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const [label, setLabel] = useState("Select your job");
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
        <div
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
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
