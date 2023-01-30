import { useState, useContext, createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
const fakeData = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1661497118888-98ab158b66d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isLiked: false
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1661598224377-a6d78346d06c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isLiked: false
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    isLiked: true
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1661592999164-00b78d12220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isLiked: false
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1661559858105-57d19d3f4f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isLiked: false
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1661347332466-9b6897c93a2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isLiked: true
  }
]
const GalleryContext2 = createContext()

function GalleryProvider2(props) {
  const { storedValue, setValue } = useLocalStorage('photos', fakeData)
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage('cartItems', [])
  const [photos, setPhotos] = useState(storedValue)
  const [cartItems, setCartItems] = useState(storedCart)
  const [likedList, setLikedList] = useState([])
  function likeToggle(photoId) {
    const updatedGallery = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isLiked: !photo.isLiked }
      }
      return photo
    })
    setValue(updatedGallery)
    setPhotos(updatedGallery)
  }

  function addToCart(newItem) {
    setCartItems((addedItems) => {
      const isExisted = addedItems.some((item) => item.id === newItem.id)
      if (isExisted) {
        alert('This photo is already existed in your cart')
        setStoredCart([...addedItems])
        return [...addedItems]
      }
      setStoredCart([...addedItems, newItem])
      return [...addedItems, newItem]
    })
  }

  function deleteFromCart(photoId) {
    setCartItems((addedItems) => {
      const result = addedItems.filter((item) => item.id !== photoId)
      setStoredCart(result)
      return result
    })
  }

  const value = {
    photos,
    cartItems,
    likedList,
    setPhotos,
    setCartItems,
    setLikedList,
    likeToggle,
    addToCart,
    deleteFromCart
  }
  return (
    <GalleryContext2.Provider
      value={value}
      {...props}
    ></GalleryContext2.Provider>
  )
}

function useGallery2() {
  const context = useContext(GalleryContext2)
  if (typeof context === 'undefined') {
    throw new Error('useGallery2 must be used inside GalleryProvider2')
  }
  return context
}

export { useGallery2, GalleryProvider2 }
