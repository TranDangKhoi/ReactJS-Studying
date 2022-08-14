import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
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

    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  console.log("log ~ ReactHookForm ~ isValid", isValid);
  console.log("log ~ ReactHookForm ~ isSubmitting", isSubmitting);
  // errors = formState.errors
  // console.log(errors);
  const onSubmit = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(data);
      }, 4000);
    });
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
  };
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
        <input
          type="email"
          id="email"
          className="p-4 rounded-lg border-2 border-gray-200"
          placeholder="Enter your email address"
          {...register("email")}
        />
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
    </form>
  );
};

export default ReactHookForm;
