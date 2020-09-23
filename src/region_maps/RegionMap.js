import React from "react"
import MapRegionPicker from './MapRegionPicker'
import {scoreToColor} from './../helpers/colorGen'
import {countiesByUsaState, usaStatesProps} from '../data/usa_counties'
// import counties from './NC_svg_data'
const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )

//----------------------/////////---------------------
export default function RegionMap(props) {

  const {regionName} = props
  const subRegions = countiesByUsaState[regionName]()
  const stateProps = usaStatesProps[regionName]
  let fillColors = {}
  stateProps.allowed.forEach( x=> fillColors[x]=rndScoreColor())
  const enabledRegions = stateProps.allowed//Object.keys( fillColors )
  const pickedOne = (cNm)=> console.log( cNm + ' County, NC')

  return (
    <div>
      <MapRegionPicker 
        subRegions={subRegions} 
        regionName={regionName}
        fillColors={fillColors}
        enabledRegions={enabledRegions}
        doPickedRegion={pickedOne}
        stateProps={stateProps}
        />
    </div>
  )
}