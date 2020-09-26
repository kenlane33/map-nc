import React from "react"
import MapPicker from './MapPicker'
//import {partsByRegion, propsByRegion, regionAbbreviations} from '../data/usa_counties_by_state'
import {getPropsByRegion} from '../../helpers/regionsParts'

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
    region:{
      partsByRegion, 
      propsByRegion, 
      partAbbreviations,
    }
  } = props

  const parts = partsByRegion[regionName]()
  const regionProps = getPropsByRegion(regionName, propsByRegion, partsByRegion)

  const allPartNames = ()=> Object.values(parts).map(x=>x.name)
  const enabledParts = enabledOverride || regionProps.enabled || allPartNames() // if null, allow all
  // let fillColors = {}
  // enabledParts.forEach( x=> fillColors[x]=rndScoreColor())

  return (
    <div>
      <MapPicker
        key={regionName}

        parts={parts}
        regionProps={regionProps}
        fillColorOfPartFn={fillColorOfPartFn}
        fillColors={fillColors}
        enabledParts={enabledParts}
        partAbbreviations={partAbbreviations}
        
        doPickPart={doPickPart}
        regionName={regionName}
        partWordFn={partWordFn}
        initialPart={initialPart}
        buttonTextFn={buttonTextFn}
        />
    </div>
  )
}