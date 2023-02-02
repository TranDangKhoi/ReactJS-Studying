import React from "react";
import withValue from "./withValue";

const HandleValueHocs = ({ value, setValue }) => {
  return (
    <div>
      <input
        type="text"
        className="bg-gray-300 border-2 border-black"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="text-3xl text-blue-300">{value}</div>
    </div>
  );
};

export default withValue(HandleValueHocs);
