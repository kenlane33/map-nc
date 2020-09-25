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
    regionProps,
    partWordFn,
    partAbbreviations,
  } = props
  
  const lastIdx = (enabledParts.length>0) ? enabledParts[enabledParts.length-1] : -1
  const [highCounty, setHighCounty] = useState(lastIdx)
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
  const partFullName = (partAbbreviations && partAbbreviations[highCounty]) || highCounty;
  const partWords    = (partWordFn) ? partWordFn(partFullName) : partFullName

  return (
    <div>
      <div className="clickable-state-map-county-label">
        {partWords}
      </div>
      <MapRegionSvg 
        highlights={{[highCounty]:'#33f'}}
        {...props}
        // parts={parts} 
        // regionName={regionName}
        // fillColors={fillColors}
        // enabledParts={enabledParts}
        // regionProps={regionProps}
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