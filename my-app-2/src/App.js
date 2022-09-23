import React from "react";
import "./App.css";
import HandleValueHocs from "./components/advanced-react/hocs/HandleValueHocs";
import HandleValuePropsRender from "./components/advanced-react/render-props/HandleValuePropsRender";
// import Title from "./components/advanced-react/render-props/Title";
// render props
// HOCS = Higher-Order Components
function App() {
  return (
    <div>
      {/* <Title>{() => <h1>Hello 😀</h1>}</Title> */}
      <HandleValuePropsRender></HandleValuePropsRender>
    </div>
  );
}

export default App;
