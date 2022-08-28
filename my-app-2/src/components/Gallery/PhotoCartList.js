import React, { Fragment } from "react";
import { useGallery } from "../../contexts/galleryContext";

const PhotoCartList = () => {
  const { cartItems, removeFromCart } = useGallery();
  return (
    <Fragment>
      <h3 className="text-lg font-medium text-center">Cart</h3>
      <div className="flex flex-col items-start gap-5 px-5 py-10">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div
              className="inline-flex items-center justify-between gap-5 "
              key={item.id}
            >
              <img
                src={item.url}
                alt=""
                className="object-cover w-10 h-10 rounded-full"
              />
              <button
                className="p-3 text-sm font-semibold text-white bg-red-400 rounded-lg"
                onClick={() => removeFromCart(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default PhotoCartList;
