import React, { Fragment } from "react";
import "./App.css";
import HeaderMain2 from "./components/ContextReact/HeaderMain2";
import PhotoCartList2 from "./components/Gallery/PhotoCartList2";
import PhotoList2 from "./components/Gallery/PhotoList2";
import { AuthProvider2 } from "./contexts/auth-context2";
import { GalleryProvider2 } from "./contexts/gallery-context2";

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
      <AuthProvider2>
        <GalleryProvider2>
          <HeaderMain2></HeaderMain2>
          <PhotoList2></PhotoList2>
          <PhotoCartList2></PhotoCartList2>
        </GalleryProvider2>
      </AuthProvider2>
    </Fragment>
  );
}

export default App;
