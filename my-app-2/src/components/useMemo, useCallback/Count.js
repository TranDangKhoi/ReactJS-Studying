import React, { useRef } from 'react'
import { useState } from 'react'

const Count = React.memo(({ calculate }) => {
  const [count, setCount] = useState(0)
  const renderRef = useRef(0)
  return (
    <div>
      <div>Count: {count}</div>
      <div>Renders: {renderRef.current++}</div>
      <button
        className='p-3 font-medium text-white bg-blue-400 rounded'
        onClick={() => setCount((c) => c + 1)}
      >
        Increase
      </button>
    </div>
  )
})

export default Count
