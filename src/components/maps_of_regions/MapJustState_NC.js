import React from "react"
import countiesByState_NcOnly from '../../data/map_data/state_nc_only/countiesByState_NcOnly'
import MapDrilldown from '../maps/MapDrilldown'
import {fakeFillColorFn} from '../maps/fakeColorsHelp'
// fakeFillColorFn = (partNm,enabledList)=>'red'

//----------------------/////////---------------------
export default function MapJustState_NC(props) {

  return (
    <MapDrilldown 
      mapLevels={[
        {
          region: countiesByState_NcOnly, 
          picked:'NC',
          buttonTextFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
          partWordFn: (p,r)=>`${p} County, ${r}`,
          backIcon: null,
          fillColorOfPartFn: fakeFillColorFn,
        }
      ]}
    />
  )

}