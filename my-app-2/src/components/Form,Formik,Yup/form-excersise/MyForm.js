import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
        email: Yup.string()
          .email("Your email address is invalid")
          .required("Please enter your email"),
        intro: Yup.string().required("Please tell us something about yourself"),
        job: Yup.string().required("Please select your current job"),
        term: Yup.boolean().oneOf(
          [true],
          "You must agree to the terms and conditions to continue"
        ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form
        className="p-10 w-full max-w-[500px] mx-auto my-5"
        autoComplete="off"
      >
        <MyInput
          label="First name"
          name="firstName"
          placeholder="Enter your first name"
          id="firstName"
        ></MyInput>
        <MyInput
          label="Last name"
          name="lastName"
          placeholder="Enter your last name"
          id="lastName"
        ></MyInput>
        <MyInput
          label="Email address"
          name="email"
          placeholder="Enter your email address"
          id="email"
          type="email"
        ></MyInput>
        <MyTextarea
          label="Introduce yourself"
          name="intro"
          placeholder="Tell us something about yourself"
          id="intro"
        ></MyTextarea>
        <MySelect label="Your job" name="job" id="job">
          <option value="Developer">Developer</option>
          <option value="Marketing">Marketing</option>
          <option value="Student">Student</option>
        </MySelect>
        <MyCheckbox name="term">
          <p>I accept the terms and coditions</p>
        </MyCheckbox>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white text-lg rounded-lg p-5"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

// useField
// {label, name}
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-lg border-2 border-gray-200"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
      <div className="text-sm text-red-500"></div>
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 rounded-lg border-2 border-gray-200 h-[150px] resize-none"
        {...field}
        {...props}
      ></textarea>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
      <div className="text-sm text-red-500"></div>
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-lg border-2 border-gray-200"
        {...field}
        {...props}
      ></select>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
      <div className="text-sm text-red-500"></div>
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
      <div className="text-sm text-red-500"></div>
    </div>
  );
};
export default MyForm;
