import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div
      className="input-div"
      ref={divRef}
    >
      <input
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border-2 border-gray-300 focus:border-blue-300"
        ref={inputRef}
      />
    </div>
  );
};

export default InputFocus;
