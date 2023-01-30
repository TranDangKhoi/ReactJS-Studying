import { useState } from 'react'

export default function useHandleChange(initialVallues) {
  const [values, setValues] = useState(initialVallues)
  const handleChange = (e) => {
    const type = e.target.type
    setValues({
      ...values, // copy dữ liệu cập nhật mới nhất của object trước và gán vào object hiện tại
      [e.target.name]: type === 'checkbox' ? e.target.checked : e.target.value
    })
  }
  return {
    values,
    handleChange
  }
}
