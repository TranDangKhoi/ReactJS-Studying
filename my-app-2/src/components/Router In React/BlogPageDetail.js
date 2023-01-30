import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BlogPageDetail = () => {
  // UseParams là gì ?
  // fetching.com/blog?slug=hello-world
  // Làm sao để lấy được cái phần slug=hello-world để nhét vào url
  // -> sử dụng hook useParam
  const { slug } = useParams()
  // slug sẽ là thứ nằm sau blog/
  // VD: localhost:3000/blog/hello-world
  // -> thì slug sẽ = hello-world
  // Vậy để slug được thiên biến vạn hóa khi sử dụng api (pagination, breadcrumbs, ...)
  // Ta điền vào api như sau
  // fetching.com?slug=${slug}
  // useNavigate là gì ?
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => navigate('/blog')}
        className='p-5 text-white bg-blue-500 rounded-sm'
      >
        Navigate to Blog Page
      </button>
    </div>
  )
}

export default BlogPageDetail
