import React, { useState } from "react";
import useHandleChange from "../../../hooks/useHandleChange";
const Form2 = () => {
  const { values, handleChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.fullName.trim().length === 0) {
      setNameError("Please enter your name");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullName"
            className="w-full max-w-[300px] p-3 border-2 border-gray-300 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border-2 border-gray-300 rounded-lg"
          placeholder="Enter your email address"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <button
          type="submit"
          className="p-3 rounded-lg text-white bg-blue-500"
        >
          Submit
        </button>
      </form>
      {/* {message} */}
      {/* <textarea
        className="w-full max-w-[300px] p-3 border-2 border-gray-300 rounded-lg"
        name="message"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">Vietnam</option>
        <option value="usa">USA</option>
        <option value="singapore">Singapore</option>
      </select>*/}
    </div>
  );
};

export default Form2;
