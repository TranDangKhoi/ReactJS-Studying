import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import DropdownHook from "../dropdown/DropdownHook";
import CheckboxHook from "../checkbox/CheckboxHook";

const schema = yup.object({
  // username: yup.string().required("Please enter your username"),
  // email: yup
  //   .string()
  //   .required("Please enter your email address")
  //   .email("Your email address is invalid"),
  // password: yup
  //   .string()
  //   .required("Please enter your password")
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //     {
  //       message:
  //         "Your password must have at least 8 characer, 1 number, 1 lowercase, 1 uppercase and 1 special character",
  //     }
  //   ),
  // gender: yup
  //   .string()
  //   .required("Please select your gender")
  //   .oneOf(["male", "female"], "You can only select male or female"),
  // job: yup.string().required("Please select your job"),
  // term: yup
  //   .boolean()
  //   .required("Please accept to the terms and condition to continue")
  //   .oneOf([true], "Please accept to the terms and condition to continue"),
});

const RegisterFormRHF = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });
  const onSubmitHandler = (values) => {
    if (!isValid || isSubmitting) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          username: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          term: false,
        });
      }, 3000);
    });
  };
  const watchGender = watch("gender");
  console.log("log ~ RegisterFormRHF ~ watchGender", watchGender);
  return (
    <form
      autoComplete="off"
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
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
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
          type="text"
        ></InputHook>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
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
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
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
              checked={watchGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              id="gender"
              name="gender"
              value="female"
              checked={watchGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
        <div className="flex flex-col gap-3 mb-5">
          <label className="cursor-pointer" htmlFor="job">
            Your job
          </label>
          <DropdownHook
            name={"job"}
            control={control}
            setValue={setValue}
            dropdownLabel={"Select your job"}
          ></DropdownHook>
          {errors.job && (
            <p className="text-red-500 text-sm">{errors.job.message}</p>
          )}
        </div>
        <div className="flex items-center gap-5">
          <CheckboxHook
            control={control}
            id="term"
            name="term"
            text="I agree to the terms and conditions"
          ></CheckboxHook>
        </div>
        {errors.term && (
          <p className="text-red-500 text-sm">{errors.term.message}</p>
        )}
      </div>
      <button
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-normal ${
          isSubmitting && "opacity-50 cursor-not-allowed"
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto animate-spin rounded-full border-2 border-white border-t-2 border-t-transparent"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterFormRHF;
