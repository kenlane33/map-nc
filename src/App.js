import React from "react";
import "./styles.css";
import RegionMap from "./region_maps/RegionMap"

export default function App() {
  return (
    <div className="App">
      <h1>Hello NC</h1>
      <h2>Lets get healthy!</h2>
      <RegionMap regionName="NC"/>
    </div>
  );
}
