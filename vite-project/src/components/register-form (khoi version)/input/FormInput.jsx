import React from "react";
import { useController } from "react-hook-form";

const FormInput = ({ control, label, ...props }) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name: props.name,
  });
  return (
    <div className="flex flex-col gap-x-3">
      <label htmlFor={props.name}>{label}</label>
      <input
        type="text"
        className="p-3 outline-none border-2 border-gray-200 rounded-md focus:border-blue-400"
        {...field}
        {...props}
      />
    </div>
  );
};

export default FormInput;
