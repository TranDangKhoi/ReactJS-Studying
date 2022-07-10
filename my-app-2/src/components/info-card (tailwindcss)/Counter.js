import React from "react";
import { useState } from "react";

const Counter = () => {
  // Stale state
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(function delay() {
      // setCount(count + 1); // nếu không truyền callback vào thì sẽ bị Stale state
      //thì nó sẽ luôn lấy giá trị count ở thằng bên ngoài tức là thằng initializeValue (0), nên dù click bao nhiêu lần sau 1 giây cũng chỉ cộng thêm 1
      setCount((count) => count + 1); // count bên trái (callback) sẽ lưu giá trị trước đó nên khi click liên tục nó vẫn sẽ cộng tổng số lần click sau 1s
    }, 1000);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <div className="number-count">{count}</div>
    </div>
  );
};

export default Counter;
