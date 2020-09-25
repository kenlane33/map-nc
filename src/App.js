import React from "react";
import "./styles.css";
import MapRegion from "./map_regions/MapRegion"
import regionDataStates from './data/usa_counties_by_state'
import regionDataCountries from './data/regions_by_country_usa_only'

export default function App() {
  return (
    <div className="App">

      <MapRegion 
        regionName="NC" 
        regionData={regionDataStates}
        partWordFn={x=>`${x} County`}
      />
    <hr/>
      <MapRegion 
        regionName="USA" 
        regionData={regionDataCountries}
        partWordFn={x=>`State of ${x}`}
      />

    </div>
  );
}
