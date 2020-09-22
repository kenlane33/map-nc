import React from "react"
import ClickableStateMap from './ClickableStateMap'
import counties from './NC_svg_data'
import {scoreToColor} from './../helpers/colorGen'

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
  return (
    <div>
      <ClickableStateMap 
        counties={counties} 
        stateName='NC'
        fillColors={fillColors}
        allowedCounties={allowedCounties}
        />
    </div>
  )
}