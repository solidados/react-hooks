import { ReactElement } from "react";

import StopWatch from "./components/StopWatch.tsx";
import UseState from "./learnHooks/UseState.tsx";
import UseEffect from "./learnHooks/UseEffect.tsx";
import UseCallback from "./learnHooks/UseCallback.tsx";
import UseRefClick from "./learnHooks/UseRefClick.tsx";
import UseMemo from "./learnHooks/UseMemo.tsx";
import UseRefName from "./learnHooks/UseRefName.tsx";
import UseContext from "./learnHooks/UseContext.tsx";
import UseReducer from "./learnHooks/UseReducer.tsx";
import UseReducerTodos from "./learnHooks/UseReducerTodos.tsx";

import "bootstrap/dist/css/bootstrap.css";
import ComponentOne from "./components/ComponentOne.tsx";

function App(): ReactElement {
  return (
    <div className="container d-flex flex-column py-3">
      <StopWatch />
      <hr />
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseCallback />
      <hr />
      <UseMemo />
      <hr />
      <UseRefClick />
      <hr />
      <UseRefName />
      <hr />
      <UseContext />
      <hr />
      <UseReducer />
      <hr />
      <UseReducerTodos />
      <hr />
      <ComponentOne />
    </div>
  );
}

export default App;
