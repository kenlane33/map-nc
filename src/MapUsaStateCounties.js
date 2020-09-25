import React from "react"
import regionDataStates from './data/usa_counties_by_state'
import regionDataCountries from './data/regions_by_country_usa_only'
import MapDrilldown from './map_regions/MapDrilldown'

//----------------------/////////---------------------
export default function MapUsaStateCounties(props) {

  return (
    <MapDrilldown 
      mapLevels={[
        {region: regionDataCountries, picked:'USA'}, 
        {region: regionDataStates, picked:'NC'}
      ]}
    />
  )

}