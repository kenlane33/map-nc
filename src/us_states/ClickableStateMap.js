import React, {useState} from "react"
// import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
import StateMapSvg from './StateMapSvg'
import PickCounty from './PickCounty'

//----------------------/////////----------------------
export default function ClickableStateMap( props ) {
  const {
    counties, 
    stateName, 
    fillColors, 
    allowedCounties,
    doPickedCounty,
    stateProps
  } = props
  
  const [highCounty, setHighCounty] = useState(allowedCounties[0])
  const [msg, setMsg] = useState(null)
  const [clickOffTimeout, setClickOffTimeout] = useState(null)

  const doClickAllowedCounty = (cnty)=> {
    setHighCounty(cnty)
    console.log(cnty)
    if (doPickedCounty) doPickedCounty(cnty) // callback to parent if passed in
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
      <StateMapSvg 
        counties={counties} 
        stateName={stateName}
        highlights={{[highCounty]:'#33f'}}
        fillColors={fillColors}
        allowedCounties={allowedCounties}
        stateProps={stateProps}
        doClickAllowedCounty={doClickAllowedCounty}
        doClickDisabledCounty={doClickDisabledCounty}
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