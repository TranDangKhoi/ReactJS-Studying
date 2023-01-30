import React, { useEffect, useState } from 'react'
import axios from 'axios'
const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      //   console.log(response);
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}
const Photo = () => {
  // useEffect(callback, [dependencies])
  //   useEffect(function callback() {
  //     // side-effects
  //   }, []);
  // https://picsum.photos/v2/list
  // https://picsum.photos/v2/list?page=2&limit=100
  const [randomPhotos, setRandomPhotos] = useState([])
  const [nextPage, setNextPage] = useState(1)
  //   console.log("outside");
  const handleLoadMorePhotos = () => {
    getRandomPhotos(nextPage).then((images) => {
      const newPhotos = [...randomPhotos, ...images]
      // concat
      setRandomPhotos(newPhotos)
      setNextPage(nextPage + 1)
    })
  }
  useEffect(() => {
    // side-effects
    handleLoadMorePhotos()
  }, [])

  return (
    <div>
      <div className='grid grid-cols-4 gap-5 p-5'>
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.id}
              className='p-3 bg-white shadow-md rounded-lg h-[200px]'
            >
              <img
                src={item.download_url}
                alt={item.author}
                className='overflow-hidden object-cover w-full h-full'
              />
            </div>
          ))}
      </div>
      <div className='text-center'>
        <button
          className='text-center inline-block px-8 py-4 bg-purple-600 text-white'
          onClick={handleLoadMorePhotos}
        >
          Load more
        </button>
      </div>
    </div>
  )
}

export default Photo
