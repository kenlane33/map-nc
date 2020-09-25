import React from "react"
import regionDataStates from './data/usa_counties_by_state'
import regionDataCountries from './data/regions_by_country_usa_only'
import MapDrilldown from './map_regions/MapDrilldown'
import UsaIcon from './data/UsaIcon'

//----------------------/////////---------------------
export default function MapUsaStateCounties(props) {

  return (
    <MapDrilldown 
      mapLevels={[
        {
          region: regionDataCountries, 
          picked:'USA',
          wordFn: (p,r)=>`${p}, ${r}`,
          buttonFn: (p,r,abbr)=>([`${p}`, `${(abbr && abbr[p]) || p}`]),
          icon: UsaIcon
        }, 
        {
          region: regionDataStates, 
          picked:'NC',
          buttonFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
          wordFn: (p,r)=>`${p} County, ${r}`,
        }
      ]}
    />
  )

}