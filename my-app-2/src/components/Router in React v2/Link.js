import React from "react";
import { Link, Outlet } from "react-router-dom";
const PagesLink = () => {
  return (
    <>
      <ul>
        <li>
          <Link className="text-blue-300" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-blue-300" to="/learn">
            Learn
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PagesLink;
