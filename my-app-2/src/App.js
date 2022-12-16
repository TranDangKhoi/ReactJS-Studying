import React from "react";
import "./App.css";
import Dropdown from "./components/advanced-react/inversion-of-control/Dropdown";
const options = [
  {
    title: "Front-End Developer",
    onClick: () => {},
  },
  {
    title: "Back-End Developer",
    onClick: () => {},
  },
  {
    title: "Fullstack Developer",
    onClick: () => {},
  },
];
function App() {
  return (
    <>
      <Dropdown
        options={options}
        placeholder="Please select your job"
        inputPlaceholder="Search for a job..."
      ></Dropdown>
    </>
  );
}

export default App;
