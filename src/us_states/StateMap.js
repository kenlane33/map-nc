import React from "react"
import ClickableStateMap from './ClickableStateMap'
import {scoreToColor} from './../helpers/colorGen'
import {usCounties, statesProps} from '../data/us_counties'
// import counties from './NC_svg_data'
const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )

//----------------------/////////---------------------
export default function StateMap(props) {

  const {usState} = props
  const counties = usCounties[usState]
  const stateProps = statesProps[usState]
  let fillColors = {}
  stateProps.allowed.forEach( x=> fillColors[x]=rndScoreColor())
  const allowedCounties = stateProps.allowed//Object.keys( fillColors )
  const pickedOne = (cNm)=> console.log( cNm + ' County, NC')

  return (
    <div>
      <ClickableStateMap 
        counties={counties} 
        stateName={usState}
        fillColors={fillColors}
        allowedCounties={allowedCounties}
        doPickedCounty={pickedOne}
        stateProps={stateProps}
        />
    </div>
  )
}