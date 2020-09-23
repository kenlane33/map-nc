import React from "react"
import {hashStrToGrey} from './../helpers/colorGen'
//import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'

const overrideMaybe = (key, lookup, defaultVal) => {
  return ( Object.keys(lookup).includes( key ) ) ? lookup[key] : defaultVal
}
//----////////////////----------------------------------
const renderOneCounty = (c, props) => {
  const {
    highlights,
    fillColors, 
    enabledRegions,
    doClickAllowedCounty,
    doClickDisabledCounty, 
    stateName='<State>', // default value <State>
  } = props
  const displayNm = c.name + ', ' + stateName

  // Fill & stroke Colors for a county
  const countyCol = hashStrToGrey(c.name)
  const fillCol = overrideMaybe( c.name, fillColors, countyCol )//( Object.keys(countyScores).includes( x.name ) ) ? countyScores[x.name] : countyColor
  const strokeCol = overrideMaybe( c.name, highlights, 'black' )
  const strokeWidth = (strokeCol==='black') ? '' : '1.4'
  const stlC = {fill:fillCol, stroke:strokeCol, strokeWidth: strokeWidth}

  // Do the right kind of clicks
  const isAllowedCounty = (enabledRegions.includes(c.name))
  const clk = isAllowedCounty ? 
                ()=>{doClickAllowedCounty(c.name) }  : 
                ()=>{doClickDisabledCounty(c.name)}
  return (
       <path
         className='svg-path'
         key={c.id}
         id={c.id}
         d={c.d}
         style={stlC}
         onClick={clk}
       >
         <title>
           {displayNm}
         </title>
       </path>
   
  )
}

//----------------------/////////----------------------
export default function StateMapSvg( props ) {
  const {
    highlights, 
    subRegions,
    stateProps,
  } = props
  const stl = {fill:'#d0d0d0',strokeWidth:'.17829'}

  // Sort so highlighted regions are last and thus drawn on top of other regions
  const isHighlighted = (x)=> Object.keys(highlights).includes(x.name)
  const highlightsLast = x=> (isHighlighted(x)) ? 1 : -1
  let sortedCounties = [...subRegions]
  sortedCounties.sort( highlightsLast )
  //console.log('Last:'+countiesWithHighlightsLast[countiesWithHighlightsLast.length-1].name)

  return (
    <svg viewBox={stateProps.viewBox} version="1.0">
      <g id="regions" transform={stateProps.transform} 
        style={stl}
      >
        {sortedCounties.map( (c)=>{
          return renderOneCounty( c, props )
        })}
      </g>
    </svg>
  )
}