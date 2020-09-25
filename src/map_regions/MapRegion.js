import React from "react"
import MapRegionPicker from './MapRegionPicker'
import {scoreToColor} from './../helpers/colorGen'
//import {partsByRegion, propsByRegion, regionAbbreviations} from '../data/usa_counties_by_state'
import {getPropsByRegion} from '../helpers/regionsParts'

// import counties from './NC_svg_data'
const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )

//----------------------/////////---------------------
export default function MapRegion(props) {

  const {
    regionName, 
    partWordFn,
    regionData:{
      partsByRegion, 
      propsByRegion, 
      regionAbbreviations,
      partAbbreviations,
    }
  } = props
  const parts = partsByRegion[regionName]()
  const regionProps = getPropsByRegion(regionName, propsByRegion, partsByRegion)
  let fillColors = {}
  const partNames = Object.values(parts).map(x=>x.name)
  const enabledParts = regionProps.allowed || partNames//Object.keys( fillColors )
  enabledParts.forEach( x=> fillColors[x]=rndScoreColor())
  // else partNames.forEach( x=> fillColors[x]=rndScoreColor())
  const pickedOne = (cNm)=> console.log( partWordFn(cNm) )

  return (
    <div>
      <h1>Hello {regionAbbreviations[regionName] || regionName}</h1>
      <MapRegionPicker 
        parts={parts} usa_state
        regionName={regionName}
        fillColors={fillColors}
        enabledParts={enabledParts}
        doPickedPart={pickedOne}
        regionProps={regionProps}
        partWordFn={partWordFn}
        partAbbreviations={partAbbreviations}
        />
    </div>
  )
}