import React from "react";
import "./App.css";
import FetchingData from "./components/advanced-react/hocs/FetchingData";

// HOCS = Higher-Order Components
function App() {
  return (
    <div>
      <FetchingData></FetchingData>
    </div>
  );
}

export default App;
