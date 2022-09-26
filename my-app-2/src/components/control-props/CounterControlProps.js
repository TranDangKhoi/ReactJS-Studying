import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Count from "./Count";
const CounterControlProps = () => {
  return (
    <div className="flex text-[25px] items-center border-2 rounded-lg border-gray-200 w-full gap-x-5 max-w-[200px] mx-auto my-6 justify-around">
      <Decrement></Decrement>
      <Count></Count>
      <Increment></Increment>
    </div>
  );
};

export default CounterControlProps;
