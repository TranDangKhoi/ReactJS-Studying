import React from "react";
import { useCount } from "../../contexts/count-context";

const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <button
      onClick={handleDecrement}
      className="cursor-pointer select-none decrement"
    >
      -
    </button>
  );
};

export default Decrement;
