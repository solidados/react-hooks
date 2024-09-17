import FunctionContextComponent from "../components/FunctionContextComponent.tsx";
import ThemeProvider from "../helpers/ThemeContext.tsx";

const UseContext = () => {
  return (
    <>
      <h3 className="text-decoration-underline">useContext()</h3>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
};

export default UseContext;
