import React from "react";
import { useState } from "react";
import useToggle from "../../../hooks/useToggle";

const Editable = () => {
  const { value: edit, handleToggleValue: handleToggleEdit } = useToggle();
  return (
    <div>
      {edit && (
        <input
          type="text"
          className="p-3 border-2 border-gray-200 rounded-sm"
        />
      )}
      <button onClick={handleToggleEdit}>Open edit</button>
    </div>
  );
};

export default Editable;
