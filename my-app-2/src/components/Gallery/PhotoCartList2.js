import React, { Fragment } from "react";
import { useGallery2 } from "../../contexts/gallery-context2";

const PhotoCartList2 = () => {
  const { cartItems, deleteFromCart } = useGallery2();
  return (
    <Fragment>
      <h3 className="text-center">Your Cart</h3>
      <div className="grid grid-cols-4 gap-3 p-4">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div
              className="relative h-[300px] group"
              key={item.id}
            >
              <img
                src={item.url}
                alt=""
                className="object-cover w-full h-full"
              />
              <button
                onClick={() => deleteFromCart(item.id)}
                className="absolute flex items-center justify-center invisible p-4 text-white -translate-x-1/2 bg-red-500 opacity-0 bottom-2 left-1/2 group-hover:opacity-100 group-hover:visible "
              >
                Delete from cart
              </button>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default PhotoCartList2;
