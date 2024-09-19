import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#fff",
      color: dark ? "#fff" : "#333",
    };
  }, [dark]);

  useEffect((): void => {
    console.log("Theme was changed");
  }, [themeStyles]);

  return (
    <>
      <h3 className="text-decoration-underline">useMemo()</h3>
      <div className="px-2 py-4" style={themeStyles}>
        <div className="d-flex align-items-center gap-3">
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
          <h3 className="m-0">{doubleNumber}</h3>
        </div>
      </div>
    </>
  );
};

function slowFunction(num: number): number {
  console.log("Calling Slow function");
  for (let i = 0; i < 1000000000; i++) {
    /**/
  }
  return num * 2;
}

export default UseMemo;
