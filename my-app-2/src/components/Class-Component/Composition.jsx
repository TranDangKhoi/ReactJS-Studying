import React, { Component } from "react";

class NormalButton extends Component {
  render() {
    return <button className="p-4 text-white rounded-lg bg-slate-300">Normal Button</button>;
  }
}

class YellowButton extends NormalButton {
  render() {
    return <button className="p-4 text-white bg-yellow-500 rounded-lg">Yellow Button</button>;
  }
}

class Composition extends Component {
  render() {
    return (
      <>
        <NormalButton></NormalButton>
        <YellowButton></YellowButton>
      </>
    );
  }
}

export default Composition;
