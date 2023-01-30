import React from 'react'
import { useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import { createPortal } from 'react-dom'
const DropdownPortal = () => {
  const [coords, setCoords] = useState({})
  const handleClick = () => {
    console.log(nodeRef.current.getBoundingClientRect())
    setCoords(nodeRef.current.getBoundingClientRect())
    setShow(!show)
  }
  const { nodeRef, setShow, show } = useClickOutside(false)
  return (
    <div
      className='relative w-full max-w-[500px] mx-auto my-5'
      ref={nodeRef}
    >
      <div
        className='w-full p-5 border-2 border-gray-200 rounded-lg cursor-pointer'
        onClick={handleClick}
      >
        Select one
      </div>
      <DropDownList
        show={show}
        coords={coords}
      ></DropDownList>
    </div>
  )
}

function DropDownList({ show, coords }) {
  if (typeof document === 'undefined') return
  return createPortal(
    <div
      className={`${
        show ? 'opacity-100 visible' : 'opacity-0 invisible'
      } transform-all transition-all border-2 border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white shadow-sm`}
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width
      }}
    >
      <div className='p-5 cursor-pointer hover:bg-gray-200'>Javascript</div>
      <div className='p-5 cursor-pointer hover:bg-gray-200'>ReactJS</div>
      <div className='p-5 cursor-pointer hover:bg-gray-200'>VueJS</div>
    </div>,
    document.querySelector('body')
  )
}

export default DropdownPortal
