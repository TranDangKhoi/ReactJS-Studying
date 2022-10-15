import React from "react";
import { useState } from "react";
import "./App.css";
import Home from "./components/Router in React v2/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Learn from "./components/Router in React v2/Learn";
import PagesLink from "./components/Router in React v2/Link";
import Courses from "./components/Router in React v2/Courses";
import Bundle from "./components/Router in React v2/Bundle";
import CourseDetail from "./components/Router in React v2/CourseDetail";
import Dashboard from "./components/Router in React v2/Dashboard";
// Props Collection
function App() {
  return (
    <>
      <PagesLink></PagesLink>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/navigate"
          element={<Navigate replace to={"/learn"}></Navigate>}
        ></Route>
        <Route path="/learn" element={<Learn></Learn>}>
          <Route path="courses" element={<Courses></Courses>}>
            <Route
              path=":courseId"
              element={<CourseDetail></CourseDetail>}
            ></Route>
          </Route>
          <Route path="bundle" element={<Bundle></Bundle>}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  );
}

export default App;
