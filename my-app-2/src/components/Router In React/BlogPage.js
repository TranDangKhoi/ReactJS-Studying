import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get('search'))
  useEffect(() => {
    setSearchParams({ search: 'evondev' })
  }, [])
  return <div>Bruh, this is the blog page, what're u doing here</div>
}

export default BlogPage
