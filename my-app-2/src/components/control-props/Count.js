import React from 'react'
import { useCount } from '../../contexts/count-context'

const Count = () => {
  const { count } = useCount()
  return <span>{count}</span>
}

export default Count
