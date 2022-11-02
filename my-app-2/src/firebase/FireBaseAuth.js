import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { useState } from "react";
const FireBaseAuth = () => {
  //   const auth = getAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);
  return (
    <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
      <h2 className="text-center font-[30px] font-medium">Add Document</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
          placeholder="Enter your email address"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
          placeholder="Enter your password"
          name="password"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
        >
          Add post
        </button>
      </form>
    </div>
  );
};

export default FireBaseAuth;
