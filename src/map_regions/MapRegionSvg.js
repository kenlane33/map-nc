import React from "react"
import {hashStrToGrey} from './../helpers/colorGen'
//import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'

const overrideMaybe = (key, lookup, defaultVal) => {
  return ( Object.keys(lookup).includes( key ) ) ? lookup[key] : defaultVal
}
//----////////////////----------------------------------
const renderOnePart = (c, props) => {
  const {
    highlights,
    fillColors, 
    enabledParts,
    doClickEnabledPart,
    doClickDisabledPart, 
    regionName='<State>', // default value <State>
  } = props
  const displayNm = c.name + ', ' + regionName

  // Fill & stroke Colors for a county
  const countyCol = hashStrToGrey(c.name)
  const fillCol = overrideMaybe( c.name, fillColors, countyCol )//( Object.keys(countyScores).includes( x.name ) ) ? countyScores[x.name] : countyColor
  const strokeCol = overrideMaybe( c.name, highlights, 'black' )
  const strokeWidth = (strokeCol==='black') ? '' : '1.4'
  const stlC = {fill:fillCol, stroke:strokeCol, strokeWidth: strokeWidth}

  // Do the right kind of clicks
  const isAllowedCounty = (enabledParts.includes(c.name))
  const clk = isAllowedCounty ? 
                ()=>{doClickEnabledPart(c.name) }  : 
                ()=>{doClickDisabledPart(c.name)}
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
export default function MapRegionSvg( props ) {
  const {
    highlights, 
    parts,
    regionProps,
  } = props
  const stl = {fill:'#d0d0d0',strokeWidth:'.17829'}

  // Sort so highlighted regions are last and thus drawn on top of other regions
  const isHighlighted = (x)=> Object.keys(highlights).includes(x.name)
  const highlightsLast = x=> (isHighlighted(x)) ? 1 : -1
  let sortedParts = [...parts]
  sortedParts.sort( highlightsLast )
  //console.log('Last:'+countiesWithHighlightsLast[countiesWithHighlightsLast.length-1].name)

  return (
    <svg viewBox={regionProps.viewBox} version="1.0">
      <g id="parts" transform={regionProps.transform} 
        style={stl}
      >
        {sortedParts.map( (p)=>{
          if (Array.isArray(p.d)) {
            return <g>{p.d.map(x=>renderOnePart( p, props ))}</g>
          } else {
            return (renderOnePart( p, props ) )
          }
        })}
      </g>
    </svg>
  )
}