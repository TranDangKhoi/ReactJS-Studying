import React from 'react'
import { useCount } from '../../contexts/count-context'
const Increment = () => {
  const { handleIncrement } = useCount()
  return (
    <div
      onClick={handleIncrement}
      className='cursor-pointer select-none increment'
    >
      +
    </div>
  )
}

export default Increment
