import React from 'react'
import withLoading from './withLoading'

const FetchingDataOther = ({ news }) => {
  console.log(news)
  return (
    <div>
      {/* {news.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  )
}

export default withLoading(FetchingDataOther, `https://hn.algolia.com/api/v1/search?query=css`)
