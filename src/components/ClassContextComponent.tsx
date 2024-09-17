import { Component, CSSProperties } from "react";
import { ThemeContext } from "../learnHooks/UseContext.tsx";

class ClassContextComponent extends Component {
  themeStyles(dark: boolean): CSSProperties {
    return {
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "3rem",
      margin: "2rem",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme: boolean) => {
          return (
            <div style={this.themeStyles(darkTheme)}>
              <h2>Class Theme</h2>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassContextComponent;
