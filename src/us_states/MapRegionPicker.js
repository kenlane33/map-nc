import React, {useState} from "react"
// import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
import StateMapSvg from './StateMapSvg'
import PickCounty from './PickCounty'

//----------------------/////////----------------------
export default function MapRegionPicker( props ) {
  const {
    regions, 
    stateName, 
    fillColors, 
    enabledRegions,
    doPickedRegion,
    stateProps
  } = props
  
  const [highCounty, setHighCounty] = useState(enabledRegions[0])
  const [msg, setMsg] = useState(null)
  const [clickOffTimeout, setClickOffTimeout] = useState(null)

  const doClickAllowedCounty = (cnty)=> {
    setHighCounty(cnty)
    console.log(cnty)
    if (doPickedRegion) doPickedRegion(cnty) // callback to parent if passed in
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
        regions={regions} 
        stateName={stateName}
        highlights={{[highCounty]:'#33f'}}
        fillColors={fillColors}
        enabledRegions={enabledRegions}
        stateProps={stateProps}
        doClickAllowedCounty={doClickAllowedCounty}
        doClickDisabledCounty={doClickDisabledCounty}
      />
      <PickCounty
        enabledRegions={enabledRegions}
        picked={highCounty}
        doClick={doClickAllowedCounty}
      />
      {msg && <div style={{background:'pink'}}>{msg}</div>}
    </div>
  )
}