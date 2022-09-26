import React from "react";
import "./App.css";
import Accordion from "./components/advanced-react/react-composition/Accordion";
import Editable from "./components/advanced-react/react-composition/Editable";
import HandleValuePropsRender from "./components/advanced-react/render-props/HandleValuePropsRender";
// import Title from "./components/advanced-react/render-props/Title";
// render props
// HOCS = Higher-Order Components
function App() {
  return (
    <div className="p-10 w-full max-w-[600px] mx-auto">
      {/* <Title>{() => <h1>Hello 😀</h1>}</Title> */}
      {/* <HandleValuePropsRender></HandleValuePropsRender> */}
      <Accordion header="Can i change my plan later?">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
          necessitatibus sunt ab commodi ad quia at voluptatum et eligendi porro
          sit optio vero exercitationem nam alias officiis iste, quis odio?
        </div>
      </Accordion>
      <Accordion header="Can I use React in Angular?">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
          necessitatibus sunt ab commodi ad quia at voluptatum et eligendi porro
          sit optio vero exercitationem nam alias officiis iste, quis odio?
        </div>
      </Accordion>
      {/* <Editable></Editable> */}
    </div>
  );
}

export default App;
