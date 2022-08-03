import React, { useEffect, useState } from "react";

const Increment = () => {
  // khi state thay đổi component sẽ re-render,
  // re-render thì nó sẽ chạy vào useEffect
  // -> câu lệnh nằm trong useEffect sẽ được thực hiện liên tục với một vòng lặp vô tận
  const [count, setCount] = useState(0);
  // nếu không truyền dependencies vào useEffect thì sẽ dẫn tới tình trạng re-render liên tục -> gây nguy hiểm có thể crash app hoặc đơ máy
  useEffect(() => {
    console.log(`count : ${count}`);
  }, [count]);
  // khi truyền count vào đây thì có nghĩa là
  // NẾU cái giá trị của dependency count kia mà thay đổi thì nó mới chạy
  // Tức là useEffect sẽ chỉ chạy 1 lần khi component render xong lần đầu tiên, còn nếu giá trị đó mà chưa thay đổi thêm lần nào
  // Thì không chạy dòng lệnh bên trong useEffect
  return (
    <div className="flex gap-y-5 items-center justify-center mx-auto my-52 flex-col">
      <button
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        onClick={() => setCount(count + 1)}
      >
        Increase number
      </button>
      <div className="text-xl">{count}</div>
    </div>
  );
};

export default Increment;
