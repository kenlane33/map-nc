import React from "react"
import ClickableStateMap from './ClickableStateMap'
import {scoreToColor} from './../helpers/colorGen'
import {usCounties, stateViewBoxes} from '../data/us_counties'
// import counties from './NC_svg_data'
const counties = usCounties['SC']
const viewBox = stateViewBoxes['SC']
const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )
export default function NCStateMap() {
  let fillColors = {}
  viewBox.allowed.forEach( x=> fillColors[x]=rndScoreColor())
  const allowedCounties = Object.keys( fillColors )
  const pickedOne = (cNm)=> console.log( cNm + ' County, NC')
  return (
    <div>
      <ClickableStateMap 
        counties={counties} 
        stateName='NC'
        fillColors={fillColors}
        allowedCounties={allowedCounties}
        doPickedCounty={pickedOne}
        viewBox={viewBox}
        />
    </div>
  )
}