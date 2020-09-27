import React from "react"
import countiesByState_NcOnly from '../../data/map_data/state_nc_only/countiesByState_NcOnly'
import MapDrilldown from '../maps/MapDrilldown'
import MapPicker from '../maps/MapPicker'
import {hashStrToGrey, scoreToColor} from './../../helpers/colorGen'
// fakeFillColorFn = (partNm,enabledList)=>'red'

//----------------------///////////////////---------------------
export default function MapUsaStateNCScores( props ) {

  const {
    scores,
    doPickPart
  } = props

  const enabledOnes = Object.keys( scores )// turn score hash's keys into an array, discard values

  //----////////////-----------------------------
  const fillColorFn = (partNm, enabledList) => {
    const score = scores[partNm]
    if (score) return scoreToColor( score )
    else       return hashStrToGrey( partNm )
  }

  const ncAsMapLevel =
  {
    region: countiesByState_NcOnly, 
    picked:'NC',
    buttonTextFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
    partWordFn: (p,r)=>`${p} County, ${r}`,
    backIcon: null,
    fillColorOfPartFn: fillColorFn,
    enabledOverride: enabledOnes,
  }

  ///////
  return (

    <MapPicker 
      {...ncAsMapLevel} 
      regionName={'NC'} 
      doPickPart={doPickPart} 
    />

  )

}