import { useRef, useState } from "react";

const UseRefClick = () => {
  const [clicks, setClicks] = useState(0);
  const ref = useRef(0);

  const handleClick = (): void => {
    ref.current = ref.current + 1;
    setClicks(ref.current);
  };
  return (
    <>
      <h3 className="text-decoration-underline">useRef() on click</h3>
      <div className="d-flex align-items-center gap-3 bg-body-tertiary px-2 py-2">
        <p className="m-0">
          Button clicked <b>{clicks}</b> times
        </p>
        <button className="btn btn-outline-dark" onClick={handleClick}>
          +1
        </button>
      </div>
    </>
  );
};

export default UseRefClick;
