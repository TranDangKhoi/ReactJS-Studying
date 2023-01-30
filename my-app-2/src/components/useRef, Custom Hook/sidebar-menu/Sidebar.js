import React from 'react'

const Sidebar = React.forwardRef((props, ref) => {
  return (
    <div
      className={`w-[300px] bg-gray-300 shadow-md transition-all fixed top-0 left-0 bottom-0 z-10  ${
        props.show ? '' : '-translate-x-full'
      }`}
      ref={ref}
    ></div>
  )
})

export default Sidebar
