import React from "react";
import { useState } from "react";

const RenderTwice = () => {
  const [name, setName] = useState("Mary");
  console.log(name);
  return (
    <div>
      <button
        className="p-4 text-white bg-green-500 rounded-lg"
        onClick={() => setName("Alex")}
      >
        Reset name
      </button>
    </div>
  );
};

export default RenderTwice;
