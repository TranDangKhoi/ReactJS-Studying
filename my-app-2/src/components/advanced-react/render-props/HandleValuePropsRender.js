import React from 'react'
import { useState } from 'react'
const HandleValuePropsRender = () => {
  return <Input>{(value) => <DisplayValue value={value}></DisplayValue>}</Input>
}

const DisplayValue = ({ value }) => {
  return <span className='text-3xl text-blue-500'>{value}</span>
}

function Input(props) {
  const [value, setValue] = useState('')
  return (
    <>
      <input
        className='bg-gray-300 border-2 border-black'
        type='text'
        name='value'
        id='value'
        onChange={(e) => setValue(e.target.value)}
      />
      {props.children(value)}
    </>
  )
}
export default HandleValuePropsRender
