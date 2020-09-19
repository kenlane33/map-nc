import React, {useState} from "react"
import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
import StateMap from './StateMap'
import PickCounty from './PickCounty'
//----------------------/////////----------------------
export default function ClickableStateMap( props ) {
  const {counties, stateNm, fills, allowed} = props
  const [highCounty, setHighCounty] = useState('Wake')
  const [msg, setMsg] = useState(null)

  const doClickOkCounty = (cnty)=> {
    setHighCounty(cnty)
    console.log(cnty)
  }

  const doClickOffCounty = (cnty) => {
    setMsg( `Data for ${cnty}, ${stateNm} is not available just yet`)
    setTimeout( ()=>{setMsg(null)}, 2000)
  }
  return (
    <div>
      {highCounty} County
      <StateMap 
        counties={counties} 
        stateNm={stateNm}
        highlights={{[highCounty]:'blue'}}
        doClickOkCounty={doClickOkCounty}
        doClickOffCounty={doClickOffCounty}
        fills={fills}
        allowed={allowed}
        />
        <PickCounty
          allowed={allowed}
          picked={highCounty}
          doClick={doClickOkCounty}
        />
        {msg && <div style={{background:'pink'}}>{msg}</div>}
    </div>
  )
}