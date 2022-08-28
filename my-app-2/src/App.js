import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Router In React/Nav";
import BlogPage from "./components/Router In React/BlogPage";
import ProfilePage from "./components/Router In React/ProfilePage";

// Link Active Outlet
function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<>Homepage</>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
