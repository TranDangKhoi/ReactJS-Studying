import React, { Fragment } from "react";
import "./App.css";
import HeaderMain from "./components/ContextReact/HeaderMain";
import { AuthProvider } from "./contexts/authContext";
import { GalleryProvider } from "./contexts/galeryContext";
// Context
// VD: Trong App(status: false) có Header, trong Header lại có Menu -> User -> Profile
// Nếu ta dùng props để truyền giá trị status kia qua từng component như vậy thì sẽ gây ra 1 tình trạng đó chính là Props Drilling
// Giờ phải dùng Context để truyền giá trị status: false vào profile luôn

// function CountDisplay() {
//   const [count] = useCount();
//   return <div>The count is: {count}</div>;
// }

// function Counter() {
//   const [, setCount] = useCount();
//   const increment = () => setCount((c) => c + 1);
//   return (
//     <button
//       className="p-4 text-white bg-blue-500 rounded-lg"
//       onClick={increment}
//     >
//       Increment count
//     </button>
//   );
// }

function App() {
  return (
    <Fragment>
      {/* <div>
        <CountProvider>
          <CountDisplay></CountDisplay>
          <Counter></Counter>
        </CountProvider>
      </div> */}
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
