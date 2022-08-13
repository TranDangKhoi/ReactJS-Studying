import React from "react";
import { useForm } from "react-hook-form";
// using react-hook-form
const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // errors = formState.errors
  console.log(errors);
  const onSubmit = (data) => console.log(data);
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
          {...register("firstName", {
            required: true,
            maxLength: 10,
            // max: 10, -> dùng cho number
          })}
        />
        {errors?.firstName?.type === "required" && (
          <div className="text-red-500 text-md">
            Please enter your first name
          </div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-md">
            Your first name must be less than 10 characters
          </div>
        )}
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
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
