import React from "react";
import "./styles.css";
// import MapRegion from "./map_regions/MapRegion"
import MapUsaStatesAll from './components/maps_of_regions/MapUsaStates_All'
import MapUsaStateNC from './components/maps_of_regions/MapUsaState_NC'

export default function App() {
  return (
    <div className="App">
      <MapUsaStateNC />
      <hr/>
      <MapUsaStatesAll />
    </div>
  );
}
