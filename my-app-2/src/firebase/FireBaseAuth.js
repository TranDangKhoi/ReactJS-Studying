import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { useState } from "react";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
const FireBaseAuth = () => {
  //   const auth = getAuth();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });
  }, [userInfo]);
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await updateProfile(auth.currentUser, {
        displayName: values.username,
        photoURL:
          "https://images.unsplash.com/photo-1667202819845-44ecd08552b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      });
      const userRef = collection(db, "users");
      setUserInfo(user);
      addDoc(userRef, {
        username: values.username,
        email: values.email,
        password: values.password,
        id: user.user.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = () => {
    signOut(auth);
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(auth, values.email, values.password);
    setUserInfo(user);
    console.log("Login successfully");
  };
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <h2 className="text-center font-[30px] font-medium">Sign up form</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
            placeholder="Enter your username"
            name="username"
            onChange={handleInputChange}
          />
          <input
            type="email"
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
            Sign up
          </button>
        </form>

        <div className="flex flex-col items-center mt-10 gap-x-5">
          {userInfo?.email && <div>{userInfo.email}</div>}
          {userInfo?.photoURL && (
            <img
              src={userInfo.photoURL}
              alt="Your avatar"
              className="w-20 h-20 rounded-full"
            />
          )}
          {userInfo?.displayName && <div>{userInfo.displayName}</div>}
          <button
            className="p-3 text-sm font-medium text-white bg-purple-500 rounded-lg"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="w-full mt-20 max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <h2 className="text-center font-[30px] font-medium">Sign in form</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
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
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default FireBaseAuth;
