import React, { Component } from "react";

const carsList = ["BMW", "Audi", "Son Lambo"];

function fetchAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carsList);
    }, 1000);
  });
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      cars: []
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

  componentDidMount() {
    fetchAPI().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        cars: res
      }));
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h1>Hello World</h1>
        <h3>Current time: {this.state.time.created}</h3>
        <h3 className="seconds">Current time: {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </>
    );
  }
}

export default Clock;
