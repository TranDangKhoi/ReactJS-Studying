import { useContext, useState, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1661497118888-98ab158b66d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1661598224377-a6d78346d06c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    isLiked: true,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1661592999164-00b78d12220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1661559858105-57d19d3f4f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1661347332466-9b6897c93a2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: true,
  },
];
const GalleryContext = createContext();

function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favoriteList, setFavoriteList] = useState([]);
  function toggleLiked(photoId) {
    const updatedGallery = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isLiked: !photo.isLiked };
      }
      return photo;
    });
    setPhotos(updatedGallery);
    setValue(updatedGallery);
  }
  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      if (isExisted) {
        alert("That item is already existed in cart");
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      setStoredCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }
  function removeFromCart(removeItemId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== removeItemId)
    );
    setStoredCart((prevItems) =>
      prevItems.filter((item) => item.id !== removeItemId)
    );
  }
  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setCartItems,
    setFavoriteList,
    toggleLiked,
    addToCart,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within GalleryProvider");
  return context;
}

export { useGallery, GalleryProvider };
