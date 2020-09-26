import React from "react"
import regionDataStates from '../../data/map_data/all_usa_states/counties_by_state_usa_only'
import regionDataCountries from '../../data/map_data/all_usa_states/states_by_country_usa_only'
import MapDrilldown from '../../map_regions/MapDrilldown'
import UsaIcon from '../../data/UsaIcon'

//----------------------/////////---------------------
export default function MapUsaStateCounties(props) {

  return (
    <MapDrilldown 
      mapLevels={[
        {
          region: regionDataCountries, 
          picked:'USA',
          buttonFn: (part,rgn,abbr)=>([`${part}`, `${(abbr && abbr[part]) || part}`]),
          wordFn: (part,region)=>`${part}, ${region}`,
          backIcon: null
        }, 
        {
          region: regionDataStates, 
          picked:'NC',
          buttonFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
          wordFn: (p,r)=>`${p} County, ${r}`,
          backIcon: UsaIcon,
        }
      ]}
    />
  )

}