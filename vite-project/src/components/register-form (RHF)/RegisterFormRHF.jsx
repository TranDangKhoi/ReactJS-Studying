import React from "react";

const RegisterFormRHF = () => {
  return (
    <div className="max-w-[300px] mx-auto p-10 my-10">
      <div className="flex flex-col gap-3">
        <label className="cursor-pointer" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="p-4 border-gray-200 border-2 rounded-lg bg-white outline-none transition-all focus:border-blue-400"
          placeholder="Enter your username"
        />
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
    </div>
  );
};

export default RegisterFormRHF;
