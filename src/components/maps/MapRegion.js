import React from "react"
import MapPicker from './MapPicker'
import {scoreToColor} from './../../helpers/colorGen'
//import {partsByRegion, propsByRegion, regionAbbreviations} from '../data/usa_counties_by_state'
import {getPropsByRegion} from '../../helpers/regionsParts'

// import counties from './NC_svg_data'
const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )

//----------------------/////////---------------------
export default function MapRegion( props ) {

  const {
    regionName, 
    partWordFn,
    doPick,
    initialPart,
    buttonTextFn,
    enabledOverride,
    region:{
      partsByRegion, 
      propsByRegion, 
      partAbbreviations,
    }
  } = props
  const parts = partsByRegion[regionName]()
  const regionProps = getPropsByRegion(regionName, propsByRegion, partsByRegion)
  let fillColors = {}
  const allPartNames = Object.values(parts).map(x=>x.name)
  const enabledParts = enabledOverride || regionProps.enabled || allPartNames // if null, allow all
  enabledParts.forEach( x=> fillColors[x]=rndScoreColor())
  const doPickedPart = (nm)=> {
    doPick(nm)
    console.log( `MapRegion.doPickedPart( ${partWordFn(nm, regionName)} )` )
  }

  return (
    <div>
      <MapPicker
        parts={parts}
        key={regionName}

        regionName={regionName}
        fillColors={fillColors}
        enabledParts={enabledParts}
        doPickedPart={doPickedPart}
        regionProps={regionProps}
        partWordFn={partWordFn}
        partAbbreviations={partAbbreviations}
        initialPart={initialPart}
        buttonTextFn={buttonTextFn}
        />
    </div>
  )
}