import React from 'react'
import ModalBase from './ModalBase'
// fixed inset-0 z-50: container
// relative content
const ModalAdvanced = ({ children, heading, ...props }) => {
  return (
    <ModalBase {...props}>
      <span
        className='absolute flex items-center justify-center p-2 bg-gray-100 rounded-full cursor-pointer close -top-2 -right-2'
        onClick={props.onClose}
      >
        <i className='fa-solid fa-xmark'></i>
      </span>
      <h2 className='text-[40px] text-center mb-5 text-black font-medium'>{heading}</h2>
      {children}
    </ModalBase>
  )
}

export default ModalAdvanced
