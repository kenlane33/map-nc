import React from "react"
import countiesByState_NcOnly from '../../data/map_data/state_nc_only/countiesByState_NcOnly'
import MapDrilldown from '../maps/MapDrilldown'
import {hashStrToGrey, scoreToColor} from './../../helpers/colorGen'
// fakeFillColorFn = (partNm,enabledList)=>'red'

const rndScore      = ()=>Math.random()

//----------------------/////////---------------------
export default function MapUsaState_JustNC(props) {

  // const {propsByRegion, partsByRegion} = countiesByState_NcOnly
  const fakeScoresForEnabled = {
    'Ashe':        rndScore(), 
    'Buncombe':    rndScore(),
    'Gates':       rndScore(),
    'Mecklenburg': rndScore(),
    'New Hanover': rndScore(),
    'Robeson':     rndScore(),
    'Wake':        rndScore(),
  }

  const fillColorFn = (partNm, enabledList) => {
    const score = fakeScoresForEnabled[partNm]
    if (score) return scoreToColor(score)
    else return hashStrToGrey(partNm)
  }

  return (
    <MapDrilldown 
      mapLevels={[
        {
          region: countiesByState_NcOnly, 
          picked:'NC',
          buttonTextFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
          partWordFn: (p,r)=>`${p} County, ${r}`,
          backIcon: null,
          fillColorOfPartFn: fillColorFn,
        }
      ]}
    />
  )

}