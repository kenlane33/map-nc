import React from "react"
import countiesByState from '../../data/map_data/all_usa_states/countiesByState_UsaOnly'
import regionDataCountries from '../../data/map_data/all_usa_states/states_by_country_usa_only'
import MapDrilldown from '../maps/MapDrilldown'
import UsaIcon from '../../data/UsaIcon'

//----------------------/////////---------------------
export default function MapUsaStateCounties(props) {

  return (
    <MapDrilldown 
      mapLevels={[
        {
          region: regionDataCountries, 
          picked:'USA',
          enabledOverride: ['NC', 'SC', 'CA', 'TX', 'OH', 'WY', 'WA', 'FL', 'ND', 'CO', 'ME'],
          buttonFn: (part,rgn,abbr)=>([`${part}`, `${(abbr && abbr[part]) || part}`]),
          wordFn: (part,region)=>`${part}, ${region}`,
          backIcon: null
        }, 
        {
          region: countiesByState, 
          picked:'NC',
          buttonFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
          wordFn: (p,r)=>`${p} County, ${r}`,
          backIcon: UsaIcon,
        }
      ]}
    />
  )

}