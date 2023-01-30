import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import useHover from '../../hooks/useHover'

const Tooltip2 = ({ children, text }) => {
  const { hovered, nodeRef } = useHover()
  const [coords, setCoords] = useState({})
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect())
  }
  return (
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span
        className='font-semibold'
        onMouseOver={handleHover}
        ref={nodeRef}
      >
        {text}
      </span>
    </div>
  )
}

function TooltipContent({ children, coords }) {
  return createPortal(
    <p
      className='absolute inline-block max-w-[200px] p-3 rounded-lg text-white -translate-y-full text-center bg-black rounded-x'
      style={{
        top: coords.top - coords.height / 2 + window.scrollY,
        left: coords.left - coords.width / 2
      }}
    >
      {children}
    </p>,
    document.querySelector('body')
  )
}

export default Tooltip2
