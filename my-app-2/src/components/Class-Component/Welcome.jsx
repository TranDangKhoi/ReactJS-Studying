// function Welcome(props) {
//   return (
//     <>
//       <h1>Hello, {props.name}</h1>
//       <h2>Hello, {props.age}</h2>
//     </>
//   );
// }

// export default Welcome;
import React from 'react'
class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, {this.props.name}</h1>
        <h2>Hello, {this.props.age}</h2>
      </>
    )
  }
}

export default Welcome
