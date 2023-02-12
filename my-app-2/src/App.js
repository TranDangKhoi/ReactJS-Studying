import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import StaffAddPage from "./pages/StaffAddPage";
import StaffPage from "./pages/StaffPage";

function App() {
  const elements = useRoutes([
    {
      path: "/",
      element: <DashboardPage></DashboardPage>,
    },
    {
      path: "/about",
      element: <AboutPage></AboutPage>,
    },
    {
      path: "/staff",
      element: <StaffPage></StaffPage>,
    },
  ]);
  return (
    <>{elements}</>

    // <Routes>
    //   <Route
    //     path="/"
    //     element={<DashboardPage></DashboardPage>}
    //   ></Route>
    //   <Route
    //     path="/about"
    //     element={<AboutPage></AboutPage>}
    //   ></Route>
    //   <Route
    //     path="/staff/*"
    //     element={<StaffPage></StaffPage>}
    //   ></Route>
    // </Routes>
  );
}

export default App;
