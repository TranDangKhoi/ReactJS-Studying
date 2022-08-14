import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";
// using react-hook-form
const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Your first name must be less than 10 characters"),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const handleSetDemoData = () => {
    setValue("firstName", "Tran");
    setValue("lastName", "Khoi");
    setValue("email", "khoi@gmail.com");
  };
  const watchShowAge = watch("showAge", false);
  // errors = formState.errors
  // console.log(errors);
  const onSubmit = async (data) => {
    if (isValid) {
      console.log(data);
      // After successfully submitted then reset form
      reset({
        firstName: "",
      });
    }
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto my-5"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="p-4 rounded-lg border-2 border-gray-200"
          placeholder="Enter your first name"
          {...register("firstName")}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-md">{errors.firstName.message}</div>
        )}
        {/* {errors?.firstName?.type === "max" && (
          <div className="text-red-500 text-md">{errors.firstName.message}</div>
        )} */}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="p-4 rounded-lg border-2 border-gray-200"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          placeholder="Please enter your email"
          id="email"
          control={control}
        ></MyInput>
      </div>
      <div className="flex flex-col gap-2">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            className="p-4 rounded-lg border-2 border-gray-200"
            placeholder="Enter your age"
          />
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white text-lg rounded-lg p-5"
      >
        {isSubmitting ? (
          <div className="mx-auto w-6 h-6 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
      <button
        className="my-3 p-4 rounded-md bg-green-400 text-white text-sm w-full"
        onClick={handleSetDemoData}
      >
        Demo Data
      </button>
    </form>
  );
};

const MyInput = ({ control, ...props }) => {
  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <input
          className="p-4 rounded-lg border-2 border-gray-200"
          {...field}
          {...props}
        />
      )}
    ></Controller>
  );
};

export default ReactHookForm;
