import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import "./App.css";
// Context
// VD: Trong App(status: false) có Header, trong Header lại có Menu -> User -> Profile
// Nếu ta dùng props để truyền giá trị status kia qua từng component như vậy thì sẽ gây ra 1 tình trạng đó chính là Props Drilling
// Giờ phải dùng Context để truyền giá trị status: false vào profile luôn
const CountContext = createContext();
function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}
function CountDisplay() {
  const [count] = useContext(CountContext);
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useContext(CountContext);
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      className="p-4 text-white bg-blue-500 rounded-lg"
      onClick={increment}
    >
      Increment count
    </button>
  );
}

function App() {
  return (
    <div>
      <CountProvider>
        <Counter></Counter>
        <CountDisplay></CountDisplay>
      </CountProvider>
    </div>
  );
}

export default App;
