import React from "react"
import countiesByState from '../../data/map_data/all_usa_states/countiesByState_UsaOnly'
import statesByCountry from '../../data/map_data/all_usa_states/statesByCountry_UsaOnly'
import MapDrilldown from '../maps/MapDrilldown'
import UsaIcon from '../../data/UsaIcon'

import {fakeFillColorFn} from '../maps/mapColorsHelp'

//----------------------/////////---------------------
export default function MapUsaStateCounties(props) {

  return (
    <MapDrilldown
      doPickPart={props.doPickPart}
      mapLevels={[
        {
          region: statesByCountry,
          picked:'USA',
          enabledOverride: ['NC', 'SC', 'VA', 'CA', 'TX', 'OH', 'WA', 'FL', 'ND', 'CO', 'ME'].sort(),
          buttonTextFn: (part,rgn,abbr)=>([`${part}`, `${(abbr && abbr[part]) || part}`]),
          partWordFn: (part,region)=>`${part}, ${region}`,
          backIcon: null,
          fillColorOfPartFn: fakeFillColorFn,
        }, 
        {
          region: countiesByState, 
          picked:'NC',
          buttonTextFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
          partWordFn: (p,r)=>`${p} County, ${r}`,
          backIcon: UsaIcon,
          fillColorOfPartFn: fakeFillColorFn,
        }
      ]}
    />
  )

}