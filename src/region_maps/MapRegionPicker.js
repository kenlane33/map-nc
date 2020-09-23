import React, {useState} from "react"
// import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
import StateMapSvg from './StateMapSvg'
import ButtonPicker from './ButtonPicker'

//----------------------/////////----------------------
export default function MapRegionPicker( props ) {
  const {
    regionName, 
    subRegions,
    fillColors, 
    enabledRegions,
    doPickedRegion,
    stateProps, 
  } = props
  
  const [highCounty, setHighCounty] = useState(enabledRegions[enabledRegions.length-1])
  const [msg, setMsg] = useState(null)
  const [clickOffTimeout, setClickOffTimeout] = useState(null)

  const doClickAllowedCounty = (cnty)=> {
    setHighCounty(cnty)
    console.log(cnty)
    if (doPickedRegion) doPickedRegion(cnty) // callback to parent if passed in
  }

  const doClickDisabledCounty = (cnty) => {
    setMsg( `Data for ${cnty}, ${regionName} is not available just yet`)
    if (clickOffTimeout) clearTimeout( clickOffTimeout )
    setClickOffTimeout( setTimeout( ()=>{setMsg(null)}, 2000) )
  }
  return (
    <div>
      <div className="clickable-state-map-county-label">
        {highCounty} County
      </div>
      <StateMapSvg 
        subRegions={subRegions} 
        regionName={regionName}
        highlights={{[highCounty]:'#33f'}}
        fillColors={fillColors}
        enabledRegions={enabledRegions}
        stateProps={stateProps}
        doClickAllowedCounty={doClickAllowedCounty}
        doClickDisabledCounty={doClickDisabledCounty}
      />
      <ButtonPicker
        enabledRegions={enabledRegions}
        picked={highCounty}
        doClick={doClickAllowedCounty}
      />
      {msg && <div style={{background:'pink'}}>{msg}</div>}
    </div>
  )
}