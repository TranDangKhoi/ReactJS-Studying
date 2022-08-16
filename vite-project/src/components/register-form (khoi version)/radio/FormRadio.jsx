import React from "react";
import { useController } from "react-hook-form";

const FormRadio = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <>
      <div className="flex items-center gap-x-3">
        <input type={"radio"} {...field} {...props} />
      </div>
    </>
  );
};

export default FormRadio;
