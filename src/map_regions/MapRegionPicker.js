import React, {useState} from "react"
// import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
import MapRegionSvg from './MapRegionSvg'
import ButtonPicker from './ButtonPicker'

//----------------------/////////----------------------
export default function MapRegionPicker( props ) {
  const {
    regionName, 
    enabledParts,
    doPickedPart,
    partWordFn,
    partAbbreviations,
  } = props
  
  const lastIdx = (enabledParts.length>0) ? enabledParts[enabledParts.length-1] : -1
  const [pickedPart, setPickedPart] = useState(lastIdx)
  const [msg, setMsg] = useState(null)
  const [clickOffTimeout, setClickOffTimeout] = useState(null)

  const doClickEnabledPart = (clickedPart)=> {
    setPickedPart(clickedPart)
    console.log(clickedPart)
    if (doPickedPart) doPickedPart(clickedPart) // callback to parent if passed in
  }

  const doClickDisabledPart = (clickedPart) => {
    setMsg( `Data for ${clickedPart}, ${regionName} is not available just yet`)
    if (clickOffTimeout) clearTimeout( clickOffTimeout )
    setClickOffTimeout( setTimeout( ()=>{setMsg(null)}, 2000) )
  }
  const partFullName = (partAbbreviations && partAbbreviations[pickedPart]) || pickedPart;
  const partWords    = (partWordFn) ? partWordFn(partFullName) : partFullName

  return (
    <div>
      <div className="clickable-state-map-county-label">
        {partWords}
      </div>
      <MapRegionSvg 
        highlights={{[pickedPart]:'#33f'}}
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
        picked={pickedPart}
        doClick={doClickEnabledPart}
      />
      {msg && <div style={{background:'pink'}}>{msg}</div>}
    </div>
  )
}