import React from "react";
import { useState } from "react";

const ErrorComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return <div onClick={handleClic}>Aaaa, tôi bị lỗi</div>;
};

export default ErrorComponent;
