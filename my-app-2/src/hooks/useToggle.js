import { useState } from "react";

export default function useToggle() {
  const [value, setValue] = useState(false);
  const handleToggleValue = () => {
    setValue((edit) => !edit);
  };
  return {
    value,
    handleToggleValue,
  };
}
