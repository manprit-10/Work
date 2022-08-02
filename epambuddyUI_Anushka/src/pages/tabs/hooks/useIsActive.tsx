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
<<<<<<< HEAD
};
=======
};
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
