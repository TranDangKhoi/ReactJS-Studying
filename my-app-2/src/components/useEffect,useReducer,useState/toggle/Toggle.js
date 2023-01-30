import React, { useState } from 'react'
import './ToggleStyle.css'
// stateless functional component
// -> là component nhưng không sử dụng state
// statefull functional component
// -> là component nhưng có sử dụng state

function Toggle() {
  //1. enabling state: useState(initialize value)
  //2. initialize state: useState(false)
  //3. reading state:
  //4. updating state:
  //   const array = useState(false);
  //   console.log(array); // [false, function]
  // -> Ta có thể hiểu nôm na là useState là mảng gồm 2 thành phần, một là boolean, hai là function
  //2. initialize value: boolean, number, string, undefined, null, [1,2,3,4], {title: "Frontend Developer"}
  const [on, setOn] = useState(false) // destructuring
  // setOn(true);
  //   console.log(on);
  // * Làm như này sẽ bị lặp vô tận
  // handlingEvent
  // tại sao lại không đặt là on và off
  // Vì đây là naming convention dùng chung của tất cả mọi người khi code React
  // [title, setTitle]
  // [isActive, setIsActive]
  // <div className="toggle" onclick="toggle"></div>
  const handleToggle = () => {
    // setOn(callback) -> setOn(prevState => !prevState)
    setOn((on) => !on) // truyền vào giá trị boolean on (hiện tại đang là false khi click vào thì sẽ thành true, và khi on đang là true click vào lại thành false, và tiếp diễn đến hết)
  }
  return (
    <div>
      <div
        className={`toggle ${on ? 'active' : ''}`}
        onClick={handleToggle}
      >
        <div className={`spinner ${on ? 'active' : ''}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
    // state changes -> re-render -> Khi click vào Toggle thì sẽ setOn (on = true)
  )
}

export default Toggle
