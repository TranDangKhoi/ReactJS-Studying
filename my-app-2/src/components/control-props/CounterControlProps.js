import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Count from "./Count";
import { CountProvider } from "../../contexts/count-context";
import { useState } from "react";
const CounterControlProps = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  // 2 dấu chấm than sẽ convert giá trị đó sang dạng boolean
  // Câu lệnh điều kiện bên dưới mang hàm ý là isControlled === value (giá trị ng khác nhập vào) khác null và onChange trả về true
  const isControlled = value !== null && !!onChange;
  const getCount = () => (isControlled ? value : count);
  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };
  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };
  const handleDecrement = () => {
    handleCountChange(getCount() - 1);
  };
  return (
    <CountProvider value={{ handleDecrement, handleIncrement, count: getCount() }}>
      <div className="flex text-[25px] items-center border-2 rounded-lg border-gray-200 w-full gap-x-5 max-w-[200px] mx-auto my-6 justify-around">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};

export default CounterControlProps;
