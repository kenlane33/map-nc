import React from "react"
import countiesByState from '../../data/map_data/all_usa_states/countiesByState_UsaOnly'
import regionDataCountries from '../../data/map_data/all_usa_states/states_by_country_usa_only'
import MapDrilldown from '../maps/MapDrilldown'
import UsaIcon from '../../data/UsaIcon'

import {fakeFillColorFn} from '../maps/fakeColorsHelp'

//----------------------/////////---------------------
export default function MapUsaStateCounties(props) {

  return (
    <MapDrilldown 
      mapLevels={[
        {
          region: regionDataCountries, 
          picked:'USA',
          enabledOverride: ['NC', 'SC', 'CA', 'TX', 'OH', 'WY', 'WA', 'FL', 'ND', 'CO', 'ME'],
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