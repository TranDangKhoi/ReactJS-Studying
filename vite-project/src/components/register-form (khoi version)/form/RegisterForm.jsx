import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../input/FormInput";
import FormRadio from "../radio/FormRadio";
import FormDropdown from "../dropdown/FormDropdown";
import FormCheckbox from "../checkbox/FormCheckbox";

const schema = yup.object({
  username: yup.string().required("Please enter your username"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Your email address is invalid"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Your password must have at least 8 characer, 1 number, 1 lowercase, 1 uppercase and 1 special character",
      }
    ),
  gender: yup
    .string()
    .required("Please select your gender")
    .oneOf(["male", "female"], "You can only select male or female"),
  term: yup
    .boolean()
    .required("Please accept to the terms and condition to continue")
    .oneOf([true], "Please accept to the terms and condition to continue"),
});

const RegisterForm = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmitForm = (data) => {
    if (isValid && !isSubmitting) {
      console.log(data);
    }
  };
  return (
    <form
      className="w-full mx-auto my-5 max-w-[300px] p-5"
      onSubmit={handleSubmit(onSubmitForm)}
      autoComplete="off"
    >
      <FormInput
        id="username"
        name="username"
        placeholder="Enter your username"
        label="Username"
        control={control}
      ></FormInput>
      {errors.username && (
        <p className="text-red-500 text-sm">{errors.username.message}</p>
      )}
      <FormInput
        id="email"
        name="email"
        placeholder="Enter your email address"
        label="Email address"
        type="email"
        control={control}
      ></FormInput>
      <FormInput
        id="password"
        name="password"
        placeholder="Enter your password"
        label="Password"
        type="password"
        control={control}
      ></FormInput>
      <div className="mb-5 flex flex-col gap-3">
        <label htmlFor="gender">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <FormRadio
              control={control}
              id="gender"
              name="gender"
              value="male"
            ></FormRadio>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <FormRadio
              control={control}
              id="gender"
              name="gender"
              value="female"
            ></FormRadio>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="job">Your job</label>
        <FormDropdown
          dropdownLabel={"Select your job"}
          name="job"
          setValue={setValue}
          control={control}
        ></FormDropdown>
      </div>
      <FormCheckbox
        name="term"
        id="term"
        text="I accept to the terms and conditions"
        control={control}
      ></FormCheckbox>

      <button
        type="submit"
        className="w-full outline-none p-5 bg-blue-500 text-white rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
