import React from "react";
import "./styles.css";
// import Map from "./map_regions/Map"
import MapUsaStatesAll from './components/maps_of_regions/MapUsaStates_All'
import MapUsaStateNC from './components/maps_of_regions/MapUsaState_NC'
import MapUsaStateNCScores from './components/maps_of_regions/MapUsaState_NC_Scores'

const Header = (p)=>(
  <div>
    <span style={{color:'white', background:'black', display:'block', padding:6, margin:0}}>
      {p.txt}
      </span>
  </div>
)

const rndScore   = ()=>(Math.round(Math.random()*100)/100.0)
const fakeScores = {
  'Ashe':        rndScore(), 
  'Buncombe':    rndScore(),
  'Gates':       rndScore(),
  'Mecklenburg': rndScore(),
  'New Hanover': rndScore(),
  'Robeson':     rndScore(),
  'Wake':        rndScore(),
  // 'Onslow':      rndScore(),
}
const fakeScoreReport = JSON.stringify(fakeScores).replace(/,/g,',  ')

//----------------------////----------------------
export default function App() {
  const doPickPart = (part,region) => {
    console.log(`App.doPickPart( ${part}, ${region} )`)
  }
  return (
    <div className="App">

      <Header txt="NC-only map with passed in scores" />
      <pre style={{fontSize:10, whiteSpace: 'pre-wrap'}}>
        {fakeScoreReport}
      </pre>
      <MapUsaStateNCScores scores={fakeScores} doPickPart={doPickPart} />
      <Header txt="NC-only map no scores" />
      <MapUsaStateNC scores={fakeScores} doPickPart={doPickPart} />

      <br/><hr/><br/>

      {/* <Header txt="All USA map with Drill Down Picking" />
      <br/>
      <MapUsaStatesAll doPickPart={doPickPart} />

      <br/><br/><br/> */}

    </div>
  );
}
