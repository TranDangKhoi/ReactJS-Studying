import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const SignUpForm3 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Your first name must be less than 20 characters")
          .required("Please enter your first name"),
        lastName: Yup.string()
          .max(20, "Your last name must be less than 20 characters")
          .required("Please enter your last name"),
      })}
    >
      <Form
        className="mx-auto my-5 w-full max-w-[500px]"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="p-4 rounded-lg border-2 border-gray-200"
          />
          <div className="text-red-500 text-sm">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="p-4 rounded-lg border-2 border-gray-200"
          />
          <div className="text-red-500 text-sm">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <button
          type="submit"
          className="p-4 my-3 w-full bg-blue-500 rounded-md text-white"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm3;
