import React from "react";
import { useController } from "react-hook-form";

const FormCheckbox = ({ control, label, text, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <div className="flex items-center gap-3">
      <input type="checkbox" className="hidden" {...field} {...props} />
      <div className="term-checkbox">
        <i className="fa-solid fa-check"></i>
      </div>
      <label className="cursor-pointer text-sm" htmlFor={props.name}>
        {text}
      </label>
    </div>
  );
};

export default FormCheckbox;
