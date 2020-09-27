import React from "react"
import countiesByState_NcOnly from '../../data/map_data/state_nc_only/countiesByState_NcOnly'
import MapDrilldown from '../maps/MapDrilldown'
import MapPicker from '../maps/MapPicker'
import Map from '../maps/Map'
import {hashStrToGrey, scoreToColor} from './../../helpers/colorGen'
// fakeFillColorFn = (partNm,enabledList)=>'red'

const rndScore      = ()=>Math.random()

//----------------------/////////---------------------
export default function MapUsaState_JustNC( props ) {

  // const {propsByRegion, partsByRegion} = countiesByState_NcOnly
  const fakeScoresForEnabled = {
    'Ashe':        rndScore(), 
    'Buncombe':    rndScore(),
    'Gates':       rndScore(),
    'Mecklenburg': rndScore(),
    'New Hanover': rndScore(),
    'Robeson':     rndScore(),
    'Wake':        rndScore(),
    'Onslow':      rndScore(),
  }
  const enabledPartList = Object.keys(fakeScoresForEnabled)

  //----////////////------------------------------
  const fillColorFn = (partNm, enabledList) => {
    const score = fakeScoresForEnabled[partNm]
    if (score) return scoreToColor(score)
    else return hashStrToGrey(partNm)
  }

  const ncAsMapLevel =
  {
    region: countiesByState_NcOnly, 
    picked:'NC',
    buttonTextFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
    partWordFn: (p,r)=>`${p} County, ${r}`,
    backIcon: null,
    fillColorOfPartFn: fillColorFn,
    enabledOverride: enabledPartList,
  }

  return (
    <div>

      <pre>{'<Map/>'}</pre>
      <Map
        {...ncAsMapLevel} 
        regionName={'NC'} 
      />
      <hr/>

      <pre>{'<MapPicker/>'}</pre>
      <MapPicker 
        {...ncAsMapLevel} 
        regionName={'NC'} 
        doPickPart={props.doPickPart} 
      />
      <hr/>

      <pre>{'<MapDrilldown/> (with just NC here)'}</pre>
      <MapDrilldown 
        doPickPart={props.doPickPart}
        mapLevels={ [ ncAsMapLevel ] }
      />
      
    </div>
  )

}