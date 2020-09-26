import React from "react";
import "./styles.css";
// import MapRegion from "./map_regions/MapRegion"
import MapUsaStateCounties from './components/maps_of_regions/MapUsaStateCounties'
import MapJustState_NC from './components/maps_of_regions/MapJustState_NC'

export default function App() {
  return (
    <div className="App">
      <MapUsaStateCounties />
      <hr/>
      <MapJustState_NC />
    </div>
  );
}
