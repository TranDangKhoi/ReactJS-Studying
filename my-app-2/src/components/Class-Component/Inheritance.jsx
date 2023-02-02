import React, { Component } from "react";

class NormalButton extends Component {
  handleClick = () => {
    console.log("Clicked");
  };
  render() {
    return (
      <button
        className="p-4 text-white rounded-lg bg-slate-300"
        onClick={this.handleClick}
      >
        Normal Button
      </button>
    );
  }
}

class YellowButton extends NormalButton {
  render() {
    return (
      <button
        className="p-4 text-white bg-yellow-500 rounded-lg"
        // Inherit the function handleClick from class NormalButton
        onClick={this.handleClick}
      >
        Yellow Button
      </button>
    );
  }
}

class Inheritance extends Component {
  render() {
    return (
      <>
        <NormalButton></NormalButton>
        <YellowButton></YellowButton>
      </>
    );
  }
}

export default Inheritance;
