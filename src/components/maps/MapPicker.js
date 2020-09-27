import React, {useState, useEffect} from "react"
// import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
import MapRegionSvg from './MapRegionSvg'
import ButtonPicker from './ButtonPicker'
import {getPropsByRegion} from '../../helpers/regionsParts'

//----------------------/////////----------------------
export default function MapPicker( props ) {
  const {
    regionName, 
    doPickPart,
    partWordFn,
    initialPart,
    buttonTextFn,
    fillColorOfPartFn,
    enabledOverride,
    region:{
      partsByRegion, 
      propsByRegion, 
      partAbbreviations,
    }
  } = props

  // Select parts
  const parts = partsByRegion[regionName]()
  const regionProps = getPropsByRegion(regionName, propsByRegion, partsByRegion)

  const allPartNames = ()=> Object.values(parts).map(x=>x.name)
  const enabledParts = enabledOverride || regionProps.enabled || allPartNames() // if null, allow all

  // Which part is initially picked?
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
    setTimeout( ()=>{
      if (doPickPart) doPickPart(clickedPart) // callback to parent if passed in
      //console.log(`doClickEnabledPart(${partWordFn(clickedPart, regionName)})`)
    }, 500 )
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
        {...props}

        parts={parts}
        regionProps={regionProps}
        enabledParts={enabledParts}

        highlights={{[pickedPart]:'#33f'}}
        fillColorOfPartFn={fillColorOfPartFn}
        doClickEnabledPart={doClickEnabledPart}
        doClickDisabledPart={doClickDisabledPart}
      />
      <ButtonPicker
        regionName={regionName}
        enabledParts={enabledParts}
        picked={pickedPart}
        doClick={doClickEnabledPart}
        abbreviations={partAbbreviations}
        buttonTextFn={buttonTextFn}
      />
      {msg && <div style={{background:'pink'}}>{msg}</div>}
    </div>
  )
}