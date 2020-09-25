import React from "react"
import regionDataStates from './data/usa_counties_by_state'
import regionDataCountries from './data/regions_by_country_usa_only'
import MapTree from './map_regions/MapTree'

//----------------------/////////---------------------
export default function MapUsaStateCounties(props) {

  return (
    <MapTree 
      mapLevels={[
        {region: regionDataCountries, picked:'USA'}, 
        {region: regionDataStates, picked:'NC'}
      ]}
    />
  )

}