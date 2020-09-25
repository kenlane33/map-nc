import React, {useState} from "react"
import MapRegion from './MapRegion'

//----------------------/////////---------------------
export default function MapDrilldown(props) {
  const {mapLevels} = props
  const [currLevel, setCurrLevel] = useState(1)
  const [picks, setPicks] = useState(mapLevels.map(x=>x.picked))
  console.log(`picks ${picks} ${picks[currLevel]}`)
  
  const clamp = (v, lo, hi) => Math.max( Math.min( v, hi ), lo ) 

  const pickClk = (x)=>{
    if (currLevel+1 >= mapLevels.length) return;

    const newI = clamp( currLevel+1, 0, mapLevels.length )
    setCurrLevel( newI )

    let newPicks = [...picks]
    newPicks[newI] = x
    setPicks( newPicks )

    console.log('----'+newPicks)
  }
  const backClk = x=>{
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
        partWordFn={mapLevel.wordFn}
        doPick={pickClk}
      />
      <hr/>
    </div>
  )
}