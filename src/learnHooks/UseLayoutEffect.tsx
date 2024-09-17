import { useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [count, setCount] = useState<number>(0);

  /** Despite async useEffect() hook, useLayoutEffect() works Synchronously and manipulates all DOM elements
   * This hook is perfect when you do need to do something based on a Layout of your DOM */

  useLayoutEffect((): void => {
    console.log(count);
  }, [count]);

  const handleClick = (): void => {
    setCount((prevCount: number): number => prevCount + 1);
  };

  return (
    <>
      <h3 className="text-decoration-underline">useLayoutEffect()</h3>
      <div className="d-flex gap-3 py-2">
        <h3 className="m-0 text-black-50">{count}</h3>
        <button className="btn btn-outline-secondary" onClick={handleClick}>
          Increment
        </button>
      </div>
    </>
  );
};

export default UseLayoutEffect;
