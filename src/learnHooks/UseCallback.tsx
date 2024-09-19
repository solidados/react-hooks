import { CSSProperties, useCallback, useState } from "react";
import List from "../components/List.tsx";

const UseCallback = () => {
  const [number, setNumber] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  /** useCallBack() vs useMemo():
   * - useCallback() - return a function. It will take the whole function and will return its result.
   * In this case, `getItems` will be equal to function, while...
   *
   * - useMemo() - does not return the function, it returns the value of the function
   * In this case `getItems` will be equal to an array `[number + 1, number + 2, ...]`
   * */

  const getItems = useCallback(
    (incr: number): number[] => {
      return [number + incr + 1, number + incr + 2, number + incr + 3];
    },
    [number],
  );

  const theme: CSSProperties = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <>
      <h3 className="text-decoration-underline">useCallback()</h3>
      <div style={theme} className="d-flex align-items-center px-2 py-4 gap-3">
        <input
          className="w-25 form-control border-0 border-bottom rounded-0"
          style={{ outline: "none", boxShadow: "none" }}
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button
          className={`btn btn-outline-${dark ? "light" : "dark"} py-2`}
          onClick={() => setDark((prevDark) => !prevDark)}
        >
          {dark ? "Light" : "Dark"}
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
};

export default UseCallback;
