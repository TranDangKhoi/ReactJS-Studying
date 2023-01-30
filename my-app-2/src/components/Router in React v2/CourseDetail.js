import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const CourseDetail = () => {
  const navigate = useNavigate()
  const { courseId } = useParams()
  return (
    <div>
      <h1>URL param is: {courseId}</h1>
      <button
        className='p-3 text-lg text-white bg-blue-500'
        onClick={() => navigate('/dashboard', { state: courseId })}
      >
        Check price
      </button>
      <Link
        to='/dashboard'
        state={'Hello world'}
      >
        Test Link
      </Link>
    </div>
  )
}

export default CourseDetail
