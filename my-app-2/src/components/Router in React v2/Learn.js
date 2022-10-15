import React from "react";
import { Link, Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <div className="learn">
      <h3>This is a learnpage</h3>
      <h4>All courses are listed here</h4>
      <ul>
        <li>
          <Link className="font-bold text-green-400" to={"/learn/courses"}>
            Courses
          </Link>
        </li>
        <li>
          <Link className="font-bold text-green-400" to={"/learn/bundle"}>
            Bundle
          </Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Learn;
