import { useReducer } from "react";

type State = {
  count: number;
};

type Actions = {
  type: "decrement" | "increment";
};

const ACTIONS = {
  DECREMENT: "decrement" as const,
  INCREMENT: "increment" as const,
};

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState<number>(0);

  const decrement = (): void => {
    // setCount((prevCount: number) => prevCount - 1);
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const increment = (): void => {
    // setCount((prevCount: number) => prevCount + 1);
    dispatch({ type: ACTIONS.INCREMENT });
  };

  return (
    <>
      <h3 className="text-decoration-underline">useReducer()</h3>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <button
          onClick={decrement}
          className={`btn btn-outline-secondary ${
            state.count === 0 ? "disabled" : ""
          }`}
          disabled={state.count === 0}
        >
          ❮
        </button>
        <h3 className="m-0 user-select-none">{state.count}</h3>
        <button
          onClick={increment}
          className={`btn btn-outline-secondary ${
            state.count === 10 ? "disabled" : ""
          }`}
          disabled={state.count === 10}
        >
          ❯
        </button>
      </div>
    </>
  );
};

export default UseReducer;
