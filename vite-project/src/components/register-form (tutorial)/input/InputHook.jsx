import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <>
      <input
        type="text"
        className="p-4 border-gray-200 border-2 rounded-lg bg-white outline-none transition-all focus:border-blue-400"
        {...field}
        {...props}
      />
    </>
  );
};

export default InputHook;
