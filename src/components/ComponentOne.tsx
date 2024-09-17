import useLocalStorage from "../hooks/useLocalStorage.ts";

/** Thi component will be using its State to store the value in a localStorage */

const ComponentOne = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default ComponentOne;
