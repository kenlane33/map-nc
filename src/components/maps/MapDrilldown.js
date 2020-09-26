import React, {useState} from "react"
import MapRegion from './MapRegion'

const modArray = ( arr, idx, val, setter ) => {
  let newPicks = [...arr]
  newPicks[idx] = val
  setter( newPicks )
  // console.log(`----[${newPicks}] --> ${newPicks[idx]}`)
}

//----------------------/////////////---------------------
export default function MapDrilldown( props ) {

  const {
    mapLevels, 
    doPickPart
  } = props
  const [currLevel, setCurrLevel] = useState(0)
  const [picks, setPicks] = useState(mapLevels.map(x=>x.picked))
  const [initPart, setInitPart] = useState(null)
  //console.log(`picks ${picks} ${picks[currLevel]}`)
  
  const clamp = (v, lo, hi) => Math.max( Math.min( v, hi ), lo ) 

  //----////////------------
  const pickClk = (x)=>{
    //console.log(`MapDrilldown.pickClk(${x})`)
    if (doPickPart) doPickPart(x)

    if (currLevel+1 >= mapLevels.length) {
      return
    } else { 
      // change map level
      const newI = clamp( currLevel+1, 0, mapLevels.length )
      setCurrLevel( newI )
      setInitPart(null)
      modArray( picks, newI, x, setPicks )
    }
  }
  //----////////--------------
  const backClk = (priorRegion)=>{
    const newI = clamp( currLevel - 1, 0, mapLevels.length )
    setCurrLevel( newI )
    setInitPart(priorRegion)
    // console.log(`priorRegion:${priorRegion}`)
  }
  
  const mapLevel = mapLevels[currLevel]

  return (
    <div>
      { (currLevel>0) && 
        <button 
          className="map-drilldown-back-btn"
          style={{display:'inline', float:'left', border:'none', background:'#ddd', borderRadius:3, padding:'3px 7px'}}
          onClick={()=>backClk(picks[currLevel])}
        >
          <span style={{color:'#888'}}>{'< '}</span>

          {null || 'Back'/* TODO: fix this */}
          {/* mapLevel.backIcon || 'Back' TODO: fix this */}
        </button>
      }
      <MapRegion 
        regionName={picks[currLevel]}
        doPickPart={pickClk}
        initialPart={initPart}
        {...mapLevel}
      />
    </div>
  )
}