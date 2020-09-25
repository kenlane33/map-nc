import React, {useState} from "react"
import MapRegion from './MapRegion'

//----------------------/////////---------------------
export default function MapTree(props) {
  const {mapLevels} = props
  const [currLevel, setCurrLevel] = useState(0)
  const [picks, setPicks] = useState(mapLevels.map(x=>x.picked))
  console.log(`picks ${picks} ${picks[currLevel]}`)
  
  const pickClk = (x)=>{
    let newPicks = [...picks]
    newPicks[currLevel+1] = x
    setPicks( newPicks )
    setCurrLevel( currLevel + 1 )
    console.log('----'+newPicks)
  }
  const backClk = x=>{
    const clamp = (v, lo, hi) => Math.max( Math.min( v, hi ), lo ) 
    setCurrLevel( clamp( currLevel - 1, 0, picks.length ) )
  }
  
  const mapLevel = mapLevels[currLevel]
  return (
    <div>
      { (currLevel>0) && 
        <button 
          onClick={backClk}
          style={{display:'inline'}}
        >
          {'<'}Back
        </button>
      }
      <MapRegion 
        regionName={picks[currLevel]}
        regionData={mapLevel.region}
        partWordFn={x=>`State of ${x}`}
        doPick={pickClk}
      />
      <hr/>
    </div>
  )
}