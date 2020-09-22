import React, {useState} from "react"
// import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
import StateMap from './StateMap'
import PickCounty from './PickCounty'

//----------------------/////////----------------------
export default function ClickableStateMap( props ) {
  const {
    counties, 
    stateName, 
    fillColors, 
    allowedCounties
  } = props
  
  const [highCounty, setHighCounty] = useState('Wake')
  const [msg, setMsg] = useState(null)
  const [clickOffTimeout, setClickOffTimeout] = useState(null)

  const doClickAllowedCounty = (cnty)=> {
    setHighCounty(cnty)
    console.log(cnty)
  }

  const doClickDisabledCounty = (cnty) => {
    setMsg( `Data for ${cnty}, ${stateName} is not available just yet`)
    if (clickOffTimeout) clearTimeout( clickOffTimeout )
    setClickOffTimeout( setTimeout( ()=>{setMsg(null)}, 2000) )
  }
  return (
    <div>
      <div className="clickable-state-map-county-label">
        {highCounty} County
      </div>
      <StateMap 
        counties={counties} 
        stateName={stateName}
        highlights={{[highCounty]:'#33f'}}
        doClickAllowedCounty={doClickAllowedCounty}
        doClickDisabledCounty={doClickDisabledCounty}
        fillColors={fillColors}
        allowedCounties={allowedCounties}
        />
        <PickCounty
          allowedCounties={allowedCounties}
          picked={highCounty}
          doClick={doClickAllowedCounty}
        />
        {msg && <div style={{background:'pink'}}>{msg}</div>}
    </div>
  )
}