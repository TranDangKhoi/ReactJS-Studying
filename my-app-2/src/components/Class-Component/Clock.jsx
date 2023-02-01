import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    };
  }
  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      }
    };
    this.setState(newState);
  };

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <h3>Current time: {this.state.time.created}</h3>
        <h3>Current time: {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </>
    );
  }
}

export default Clock;
