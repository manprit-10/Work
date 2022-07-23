import { useState } from "react";

export const useIsActive = function () {
  const [isActive, setIsActive] = useState("");
  const clickHandler = function (key: string) {
    if (key === isActive) setIsActive("");
    else setIsActive(key);
  };

  return {
    isActive,
    clickHandler,
  };
};
