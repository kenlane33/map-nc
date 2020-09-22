import React from "react"
import ClickableStateMap from './ClickableStateMap'
import {scoreToColor} from './../helpers/colorGen'
import {usCounties, stateViewBoxes} from '../data/us_counties'
// import counties from './NC_svg_data'
const counties = usCounties['NC']
const viewBox = stateViewBoxes['NC']
const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )
export default function NCStateMap() {
  const fillColors = { // fills are colors
    Ashe: rndScoreColor(), 
    Buncombe: rndScoreColor(), 
    Gates: rndScoreColor(), 
    Mecklenburg: rndScoreColor(), 
    'New Hanover': rndScoreColor(), 
    Robeson: rndScoreColor(), 
    Wake: rndScoreColor(), 
  }
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