import React from "react";
import Count from "./components/Count";
import Items from "./components/Items";
import NamObject from "./components/NamObject";
import UseEffOne from "./components/UseEffOne";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Count />
      <Items />
      <NamObject/>
      <UseEffOne/>
    </div>
  );
}

export default App;
