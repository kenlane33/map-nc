import React from "react"
import MapRegionPicker from './MapRegionPicker'
import {scoreToColor} from './../helpers/colorGen'
import {partsByRegion, propsByRegion, regionAbbreviations} from '../data/usa_counties_by_state'
import {getPropsByRegion} from '../helpers/regionsParts'

// import counties from './NC_svg_data'
const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )

//----------------------/////////---------------------
export default function MapRegion(props) {

  const {regionName} = props
  const parts = partsByRegion[regionName]()
  const regionProps = getPropsByRegion(regionName, propsByRegion, partsByRegion)
  let fillColors = {}
  regionProps.allowed.forEach( x=> fillColors[x]=rndScoreColor())
  const enabledParts = regionProps.allowed//Object.keys( fillColors )
  const pickedOne = (cNm)=> console.log( cNm + ' County, NC')

  return (
    <div>
      <h1>Hello {regionAbbreviations[regionName]}</h1>
      <h2>Lets get healthy!</h2>
      <MapRegionPicker 
        parts={parts} usa_state
        regionName={regionName}
        fillColors={fillColors}
        enabledParts={enabledParts}
        doPickedPart={pickedOne}
        regionProps={regionProps}
        />
    </div>
  )
}