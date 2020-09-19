import React from "react"
import ClickableStateMap from './ClickableStateMap'
import counties from './NC_svg_data'
import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'

const rndScore = () => Math.random()

export default function NCStateMap() {
  const fills = {
    Ashe:scoreToColor( rndScore() ), 
    Buncombe:scoreToColor( rndScore() ), 
    Gates:scoreToColor( rndScore() ), 
    Mecklenburg:scoreToColor( rndScore() ), 
    'New Hanover':scoreToColor( rndScore() ), 
    Robeson:scoreToColor( rndScore() ),
    Wake:scoreToColor( rndScore() ),
  }
  const allowed = Object.keys( fills )
  return (
    <div>
      <ClickableStateMap 
        counties={counties} 
        stateNm='NC'
        fills={fills}
        allowed={allowed}
        />
    </div>
  )
}