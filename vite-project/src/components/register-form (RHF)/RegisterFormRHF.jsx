import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

const RegisterFormRHF = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
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
      <div className="flex flex-col gap-3 mb-5">
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
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer" htmlFor="email">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
          type="email"
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your email</p>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer" htmlFor="password">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
          type="password"
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your password</p>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer" htmlFor="gender">
          Gender
        </label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              id="gender"
              name="gender"
              value="male"
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              id="gender"
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label className="cursor-pointer" htmlFor="job">
            Are you a
          </label>
          <DropdownHook
            name={"job"}
            control={control}
            setValue={setValue}
          ></DropdownHook>
        </div>
        <div className="flex items-center gap-5">
          <CheckboxHook
            id="term"
            name="term"
            text="I agree to the terms and conditions"
            control={control}
          ></CheckboxHook>
        </div>
      </div>
      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-normal">
        Submit
      </button>
    </form>
  );
};

export default RegisterFormRHF;
