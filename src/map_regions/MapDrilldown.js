import React, {useState} from "react"
import MapRegion from './MapRegion'

const modArray = ( arr, idx, val, setter ) => {
  let newPicks = [...arr]
  newPicks[idx] = val
  setter( newPicks )
  console.log(`----[${newPicks}] --> ${newPicks[idx]}`)
}

//----------------------/////////---------------------
export default function MapDrilldown(props) {
  const {mapLevels} = props
  const [currLevel, setCurrLevel] = useState(1)
  const [picks, setPicks] = useState(mapLevels.map(x=>x.picked))
  const [initPart, setInitPart] = useState(null)
  //console.log(`picks ${picks} ${picks[currLevel]}`)
  
  const clamp = (v, lo, hi) => Math.max( Math.min( v, hi ), lo ) 

  const pickClk = (x)=>{
    if (currLevel+1 >= mapLevels.length) return;

    const newI = clamp( currLevel+1, 0, mapLevels.length )
    setCurrLevel( newI )
    setInitPart(null)
    modArray( picks, newI, x, setPicks )
  }
  
  const backClk = (priorRegion)=>{
    const newI = clamp( currLevel - 1, 0, mapLevels.length )
    setCurrLevel( newI )
    //modArray( picks, newI, x, setPicks )
    console.log(`priorRegion:${priorRegion}`)
    setInitPart(priorRegion)
  }
  
  const mapLevel = mapLevels[currLevel]
  return (
    <div>
      { (currLevel>0) && 
        <button 
          onClick={()=>backClk(picks[currLevel])}
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
        initialPart={initPart}
      />
      <hr/>
    </div>
  )
}