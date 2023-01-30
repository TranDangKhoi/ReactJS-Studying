import React, { useEffect, useRef, useState } from 'react'

const Textarea = () => {
  const [text, setText] = useState('Demo')
  const textareaRef = useRef(null)
  const [textareaHeight, setTextareaHeight] = useState('auto')
  //   const [textareaParentHeight, setTextareaParentHeight] = useState("auto");
  const handleChange = (e) => {
    setText(e.target.value)
    setTextareaHeight('auto')
    // setTextareaParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }

  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`)
    // cùng nghĩa với document.querySelector("textarea").scrollHeight
    // setTextareaParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text])
  return (
    <div
      className='p-5'
      //   style={{
      //     minHeight: textareaParentHeight,
      //   }}
    >
      <textarea
        className='w-full overflow-hidden max-w-[400px] p-5 rounded-lg border-2 border-gray-300 transition-all leading-normal focus:border-blue-400 resize-none'
        placeholder='Please enter your content'
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  )
}

export default Textarea
