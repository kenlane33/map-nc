import React from "react";
import "./styles.css";
import StateMap from "./us_states/StateMap"

export default function App() {
  return (
    <div className="App">
      <h1>Hello NC</h1>
      <h2>Lets get healthy!</h2>
      <StateMap usState="NC"/>
    </div>
  );
}
