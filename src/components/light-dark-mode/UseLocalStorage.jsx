// custom hook : a function which return some value and can be used in any component to get that value. It is a way to reuse logic across components.

import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue),
      );
    } catch (err) {
      console.log(err);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
};

export default useLocalStorage;
