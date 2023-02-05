import React from "react";

export default function connect(Component: any) {
  return function (props: any) {
    return <Component {...props}></Component>;
  };
}
