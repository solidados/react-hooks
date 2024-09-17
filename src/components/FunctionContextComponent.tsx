import { CSSProperties } from "react";
import { useTheme, useThemeUpdate } from "../hooks/customHooks.ts";

const FunctionContextComponent = () => {
  const darkTheme: boolean = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles: CSSProperties = {
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "3rem",
    margin: "2rem",
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="btn btn-outline-dark font-monospace"
      >
        {darkTheme ? "Light" : "Dark"}
      </button>
      <div style={themeStyles}>
        <h2>Function Theme</h2>
      </div>
    </>
  );
};

export default FunctionContextComponent;
