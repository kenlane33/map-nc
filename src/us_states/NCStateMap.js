import React from "react"
import StateMap from './StateMap'
import counties from './NC_svg_data'

export default function NCStateMap() {  
  return (
    <div>
      <StateMap counties={counties} />
    </div>
  )
}