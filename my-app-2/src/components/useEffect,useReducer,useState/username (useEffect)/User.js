import React, { useEffect, useState } from 'react'

const User = () => {
  const [info, setInfo] = useState({
    firstName: 'Tran',
    lastName: 'Khoi'
  })
  useEffect(() => {
    console.log('From input')
  }, [info.lastName])
  // nên truyền vào dependencies thứ mình muốn thay đổi trong object chứ không nên truyền cả object vào

  return (
    <>
      <div className='p-5 flex gap-x-4 items-center'>
        <input
          type='text'
          name='firstName'
          value={info.firstName}
          onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
          placeholder='Enter username'
          className='border-gray-200 border-2 shadow-sm
          outline-none text-2xl rounded-sm'
        />
      </div>
    </>
  )
}

export default User
