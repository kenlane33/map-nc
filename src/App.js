import React from "react";
import "./styles.css";
import MapRegion from "./map_regions/MapRegion"

export default function App() {
  return (
    <div className="App">
      <MapRegion regionName="SC"/>
    </div>
  );
}
