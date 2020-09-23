import React from "react"
import MapRegionPicker from './MapRegionPicker'
import {scoreToColor} from './../helpers/colorGen'
import {partsByRegion, propsByRegion} from '../data/usa_counties_by_state'
// import counties from './NC_svg_data'
const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )

//----------------------/////////---------------------
export default function RegionMap(props) {

  const {regionName} = props
  const parts = partsByRegion[regionName]()
  const stateProps = propsByRegion[regionName]
  let fillColors = {}
  stateProps.allowed.forEach( x=> fillColors[x]=rndScoreColor())
  const enabledParts = stateProps.allowed//Object.keys( fillColors )
  const pickedOne = (cNm)=> console.log( cNm + ' County, NC')

  return (
    <div>
      <MapRegionPicker 
        parts={parts} 
        regionName={regionName}
        fillColors={fillColors}
        enabledParts={enabledParts}
        doPickedPart={pickedOne}
        stateProps={stateProps}
        />
    </div>
  )
}