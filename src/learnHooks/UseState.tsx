import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState({ value: "value: ", count: 0 });
  const value: string = state.value;
  const count: number = state.count;

  const decrementCount = (): void => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  const incrementCount = (): void => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  return (
    <>
      <h3 className="text-decoration-underline">useState()</h3>
      <div className="d-flex justify-content-center align-items-center py-2">
        <button className="btn btn-outline-secondary" onClick={decrementCount}>
          -
        </button>
        <p className="text-center flex-column px-4 fs-2 m-0">
          {value}
          {count}
        </p>
        <button className="btn btn-outline-secondary" onClick={incrementCount}>
          +
        </button>
      </div>
    </>
  );
};

export default UseState;
