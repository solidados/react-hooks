import { useEffect } from "react";

const UseUpdateLogger = (value: string): void => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export default UseUpdateLogger;
