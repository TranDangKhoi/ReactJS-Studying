import React from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

const Courses = () => {
  const courseList = ["React", "Angular", "Vue", "Svelte", "Koa", "NodeJS"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  const obj = useOutletContext();
  return (
    <>
      <h3>Outlet Context: {obj.hello}</h3>
      <div className="grid grid-cols-4 gap-x-4">
        <div>Course 1</div>
        <div>Course 2</div>
        <div>Course 3</div>
        <div>Course 4</div>
        <div>Course 5</div>
        <div>Course 6</div>
      </div>
      <p>More test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
          };
        }}
        className="block"
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
          };
        }}
        className="block"
        to={`/learn/courses/tests`}
      >
        Test
      </NavLink>
      <Outlet></Outlet>
    </>
  );
};

export default Courses;
