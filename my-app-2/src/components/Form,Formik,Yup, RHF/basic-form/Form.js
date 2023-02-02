import React, { useState } from "react";
// Học về cách handle form, giả dụ giờ form mà có 6-7 cái input
// -> chúng ta sẽ phải viết 6-7 dòng useState -> useState hell rất đáng sợ
// Vì vậy giờ ta sẽ tìm hiểu làm thế nào để rút gọn lại
const Form = () => {
  // Tạo ra 1 state để lưu trữ hết tca giá trị trong form
  const [values, setValues] = useState({
    fullName: "Khoi",
    email: "",
    hobby: false,
  }); // Tạo ra 1 state với giá trị mặc định là 1 object
  // obj.property: dot notation
  // obj[property]: bracket notation
  const handleInputChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values, // copy dữ liệu cập nhật mới nhất của object trước và gán vào object hiện tại
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullName"
          className="w-full max-w-[300px] p-3 border-2 border-gray-300 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border-2 border-gray-300 rounded-lg"
          placeholder="Enter your email address"
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="hobby"
          onChange={handleInputChange}
        />
      </div>
      {/* {message} */}
      {/* <textarea
        className="w-full max-w-[300px] p-3 border-2 border-gray-300 rounded-lg"
        name="message"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">Vietnam</option>
        <option value="usa">USA</option>
        <option value="singapore">Singapore</option>
      </select>*/}
    </div>
  );
};

export default Form;
