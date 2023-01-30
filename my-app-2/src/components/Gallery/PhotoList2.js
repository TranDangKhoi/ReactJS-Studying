import React from 'react'
import { useGallery2 } from '../../contexts/gallery-context2'
import { PropTypes } from 'prop-types'

const PhotoList2 = () => {
  const { photos } = useGallery2()
  return (
    <div className='px-5 py-10'>
      <div className='grid grid-cols-4 gap-7'>
        {photos.length > 0 &&
          photos.map((item) => (
            <PhotoItem
              key={item.id}
              info={item}
            ></PhotoItem>
          ))}
      </div>
    </div>
  )
}

const PhotoItem = ({ info: { id, url, isLiked } }) => {
  const { likeToggle, addToCart } = useGallery2()
  const item = { id, url, isLiked }
  return (
    <div className='relative h-[300px] cursor-pointer group'>
      <img
        src={url}
        alt=''
        className='object-cover w-full h-full'
      />
      <span
        onClick={() => likeToggle(id)}
        className='absolute z-10 invisible w-6 h-6 opacity-0 cursor-pointer top-2 right-2 group-hover:opacity-100 group-hover:visible'
      >
        <svg
          width='42'
          height='38'
          viewBox='0 0 42 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z'
            fill={isLiked ? '#FC2872' : '#fff'}
          />
        </svg>
      </span>
      <button
        onClick={() => addToCart(item)}
        className='absolute invisible p-4 font-medium text-black transition-all -translate-x-1/2 bg-white rounded-md opacity-0 group-hover:opacity-100 group-hover:visible bottom-2 left-1/2'
      >
        Add to cart
      </button>
    </div>
  )
}

PhotoItem.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  isLiked: PropTypes.bool
}

export default PhotoList2
