import React from "react"
import MapRegionSvg from './MapRegionSvg'

//import {partsByRegion, propsByRegion, regionAbbreviations} from '../data/usa_counties_by_state'
// import {getPropsByRegion} from '../../helpers/regionsParts'

//----------------------/////////---------------------
export default function Map( props ) {

  const {
    regionName, 
    partWordFn,
    initialPart,
    buttonTextFn,

    enabledOverride,
    doPickPart,
    fillColors,
    fillColorOfPartFn,
    region,
  } = props

  return (
    <div>

      <MapRegionSvg
        key={props.regionName}
        {...props}
      />

    </div>
  )
}