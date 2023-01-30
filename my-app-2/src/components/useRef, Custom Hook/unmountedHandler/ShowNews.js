import React, { useState } from 'react'
import HackerNews from '../../useEffect,useReducer,useState/hackernewsapi/news/HackerNews'
const ShowNews = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle news</button>
      {show && <HackerNews></HackerNews>}
    </div>
  )
}

export default ShowNews
