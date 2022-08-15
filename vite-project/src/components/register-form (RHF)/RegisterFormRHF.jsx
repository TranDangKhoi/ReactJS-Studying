import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";

const RegisterFormRHF = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto p-10 my-10"
    >
      <div className="flex flex-col gap-3">
        <label className="cursor-pointer" htmlFor="username">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-normal">
        Submit
      </button>
    </form>
  );
};

export default RegisterFormRHF;
