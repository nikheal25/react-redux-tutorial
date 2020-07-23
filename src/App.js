import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./signin";
//redux
import { provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <provider store={store}>
        <h1>Hello</h1>
        <Signin />
      </provider>
    </div>
  );
}

export default App;
