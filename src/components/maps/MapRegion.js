import React from "react"
import MapPicker from './MapPicker'
//import {partsByRegion, propsByRegion, regionAbbreviations} from '../data/usa_counties_by_state'
// import {getPropsByRegion} from '../../helpers/regionsParts'

//----------------------/////////---------------------
export default function MapRegion( props ) {

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

  // const parts = partsByRegion[regionName]()
  // const regionProps = getPropsByRegion(regionName, propsByRegion, partsByRegion)

  // const allPartNames = ()=> Object.values(parts).map(x=>x.name)
  // const enabledParts = enabledOverride || regionProps.enabled || allPartNames() // if null, allow all

  return (
    <div>
      <MapPicker
        key={props.regionName}

        {...props}

        // region={region}
        // fillColorOfPartFn={fillColorOfPartFn}
        // fillColors={fillColors}
        // enabledOverride={enabledOverride}
        
        // doPickPart={doPickPart}
        // regionName={regionName}
        // partWordFn={partWordFn}
        // initialPart={initialPart}
        // buttonTextFn={buttonTextFn}

        // parts={parts}
        // regionProps={regionProps}
        // enabledParts={enabledParts}
        // partAbbreviations={partAbbreviations}
        />
    </div>
  )
}