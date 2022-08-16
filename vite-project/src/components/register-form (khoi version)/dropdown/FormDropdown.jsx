import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutside from "../../../hooks/useClickOutside";

const dropdownData = [
  {
    id: 1,
    job_value: "doctor",
    job_content: "Doctor",
  },
  {
    id: 2,
    job_value: "developer",
    job_content: "Developer",
  },
  {
    id: 3,
    job_value: "nurse",
    job_content: "Nurse",
  },
];

const FormDropdown = ({ control, setValue, name, dropdownLabel }) => {
  const { nodeRef, setShow, show } = useClickOutside();
  useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const [content, setContent] = useState(dropdownLabel);
  const handleJobChoose = (e) => {
    setValue(name, e.target.dataset.value);
    setContent(e.target.textContent);
    setShow(false);
  };
  return (
    <>
      <div className="relative" ref={nodeRef}>
        <div
          onClick={() => setShow(!show)}
          className="p-5 w-full rounded-md cursor-pointer bg-white flex items-center justify-between"
        >
          <span>{content}</span>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div
          className={`absolute top-full transition-all w-full  ${
            show ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {dropdownData.length > 0 &&
            dropdownData.map((item) => (
              <div
                key={item.id}
                className="bg-white cursor-pointer p-5 hover:bg-gray-200"
                onClick={handleJobChoose}
                data-value={item.job_value}
              >
                {item.job_content}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FormDropdown;
