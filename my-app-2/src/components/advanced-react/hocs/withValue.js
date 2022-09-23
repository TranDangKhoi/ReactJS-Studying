import { useState } from "react";

function withValue(Component) {
  return (props) => {
    const [value, setValue] = useState("");
    return <Component value={value} setValue={setValue} {...props}></Component>;
  };
}

export default withValue;
