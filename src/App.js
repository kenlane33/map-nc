import React from "react";
import "./styles.css";
import NCStateMap from "./us_states/NCStateMap"

export default function App() {
  return (
    <div className="App">
      <h1>Hello NC</h1>
      <h2>Lets get healthy!</h2>
      <NCStateMap/>
    </div>
  );
}
