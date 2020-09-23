import React from "react";
import "./styles.css";
import MapRegion from "./map_regions/MapRegion"

export default function App() {
  return (
    <div className="App">
      <h1>Hello NC</h1>
      <h2>Lets get healthy!</h2>
      <MapRegion regionName="NC"/>
    </div>
  );
}
