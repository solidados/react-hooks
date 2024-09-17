import { useEffect, useRef, useState } from "react";

const UseRefName = () => {
  const [name, setName] = useState("");
  // const renderCount = useRef(0);
  const prevName = useRef("");

  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  // const focus = () => {
  //   inputRef.current?.focus();
  // };

  useEffect((): void => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <h3 className="text-decoration-underline">useRef() on Name change</h3>
      <div>
        <input
          /*ref={inputRef}*/
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>
          My name is <b>{name}</b> and it used to be <b>{prevName.current}</b>
        </p>
        {/*<p>I am rendered {renderCount.current} times</p>*/}
        {/*<button onClick={focus}>Focus</button>*/}
      </div>
    </>
  );
};

export default UseRefName;
