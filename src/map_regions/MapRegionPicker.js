import React, {useState, useEffect} from "react"
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
    initialPart,
    buttonFn
  } = props

  const firstPart = initialPart || ((enabledParts.length>0) ? enabledParts[enabledParts.length-1] : '')
  const [pickedPart, setPickedPart] = useState(firstPart)
  useEffect(()=>{ // runs once on init
    // setPickedPart(firstPart)
    //console.log(`initialPart:${initialPart}, firstPart:${firstPart}, pickedPart:${pickedPart}`)
  },[])

  const [msg, setMsg] = useState(null)
  const [clickOffTimeout, setClickOffTimeout] = useState(null)

  const doClickEnabledPart = (clickedPart)=> {
    setPickedPart(clickedPart)
    console.log(`doClickEnabledPart(${partWordFn(clickedPart, regionName)})`)
    if (doPickedPart) doPickedPart(clickedPart) // callback to parent if passed in
  }

  const doClickDisabledPart = (clickedPart) => {
    setMsg( `Data for ${clickedPart}, ${regionName} is not available just yet`)
    if (clickOffTimeout) clearTimeout( clickOffTimeout )
    setClickOffTimeout( setTimeout( ()=>{setMsg(null)}, 2000) )
  }
  const partFullName = (partAbbreviations && partAbbreviations[pickedPart]) || pickedPart;
  const partWords    = (partWordFn) ? partWordFn(partFullName, regionName) : `${partFullName}, ${regionName}`

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
        regionName={regionName}
        enabledParts={enabledParts}
        picked={pickedPart}
        doClick={doClickEnabledPart}
        abbreviations={partAbbreviations}
        buttonFn={buttonFn}
      />
      {msg && <div style={{background:'pink'}}>{msg}</div>}
    </div>
  )
}