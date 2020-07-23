import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./signin";
//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Hello</h1>
        <Signin />
      </Provider>
    </div>
  );
}

export default App;
