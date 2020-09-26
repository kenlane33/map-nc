import React from "react"
import regionDataStates from '../../data/map_data/all_usa_states/counties_by_state_usa_only'
import MapDrilldown from '../../map_regions/MapDrilldown'

//----------------------/////////---------------------
export default function MapJustState_NC(props) {

  return (
    <MapDrilldown 
      mapLevels={[
        {
          region: regionDataStates, 
          picked:'NC',
          buttonFn: (p,r,abbr)=>[`${p}`, `County, ${r}`],
          wordFn: (p,r)=>`${p} County, ${r}`,
          backIcon: null,
        }
      ]}
    />
  )

}