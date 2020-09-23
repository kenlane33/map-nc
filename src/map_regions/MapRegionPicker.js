import React, {useState} from "react"
// import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
import MapRegionSvg from './MapRegionSvg'
import ButtonPicker from './ButtonPicker'

//----------------------/////////----------------------
export default function MapRegionPicker( props ) {
  const {
    regionName, 
    parts,
    fillColors, 
    enabledParts,
    doPickedPart,
    stateProps, 
  } = props
  
  const [highCounty, setHighCounty] = useState(enabledParts[enabledParts.length-1])
  const [msg, setMsg] = useState(null)
  const [clickOffTimeout, setClickOffTimeout] = useState(null)

  const doClickEnabledPart = (cnty)=> {
    setHighCounty(cnty)
    console.log(cnty)
    if (doPickedPart) doPickedPart(cnty) // callback to parent if passed in
  }

  const doClickDisabledPart = (cnty) => {
    setMsg( `Data for ${cnty}, ${regionName} is not available just yet`)
    if (clickOffTimeout) clearTimeout( clickOffTimeout )
    setClickOffTimeout( setTimeout( ()=>{setMsg(null)}, 2000) )
  }
  return (
    <div>
      <div className="clickable-state-map-county-label">
        {highCounty} County
      </div>
      <MapRegionSvg 
        parts={parts} 
        regionName={regionName}
        highlights={{[highCounty]:'#33f'}}
        fillColors={fillColors}
        enabledParts={enabledParts}
        stateProps={stateProps}
        doClickEnabledPart={doClickEnabledPart}
        doClickDisabledPart={doClickDisabledPart}
      />
      <ButtonPicker
        enabledParts={enabledParts}
        picked={highCounty}
        doClick={doClickEnabledPart}
      />
      {msg && <div style={{background:'pink'}}>{msg}</div>}
    </div>
  )
}