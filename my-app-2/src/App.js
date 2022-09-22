import React from "react";
import "./App.css";
import Title from "./components/advanced-react/render-props/Title";
// render props
// HOCS = Higher-Order Components
function App() {
  return (
    <div>
      <Title render={() => <h1>Hello 😀</h1>}></Title>
    </div>
  );
}

export default App;
