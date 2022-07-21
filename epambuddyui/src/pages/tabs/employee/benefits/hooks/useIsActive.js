import { useState } from "react";

export const useIsActive = function () {
  const [isActive, setIsActive] = useState(null);
  const clickHandler = function (key) {
    if (key === isActive) setIsActive(null);
    else setIsActive(key);
  };

  return {
    isActive,
    clickHandler,
  };
};
