import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  //   useEffect(() => {
  //     const timer = setInterval();
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);
  const [timer, setTimer] = useState(false);
  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timer) return; // nếu mà timer đang chạy rồi thì không được thực hiện handleStart nữa
    // không thì sẽ gây lỗi chương trình
    setTimer(
      setInterval(() => {
        setCount((count) => count + 1);
      }, 1000)
    );
  };
  const handleStop = () => {
    if (!timer) return;
    clearInterval(timer);
    setTimer(false);
  };

  // Sau này khi học tới react-router-dom thì mình sẽ phải handle cái timer này lại
  // Vì khi chuyển sang trang khác thì cần phải clear cái timer này về 0 giây
  // Nếu không clear thì nó vẫn sẽ tiếp tục chạy khi chuyển sang trang khác
  // Ta sẽ phải clear nó = useEffect

  return (
    <div>
      <h3>Timer: {count} giây</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default StopWatch;
