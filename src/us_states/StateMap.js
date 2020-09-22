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
    allowedCounties,
    doClickAllowedCounty,
    doClickDisabledCounty, 
    stateName='<State>',
  } = props
  const displayNm = c.name + ', ' + stateName

  // Fill & stroke Colors for a county
  const countyCol = hashStrToGrey(c.name)
  const fillCol = overrideMaybe( c.name, fillColors, countyCol )//( Object.keys(countyScores).includes( x.name ) ) ? countyScores[x.name] : countyColor
  const strokeCol = overrideMaybe( c.name, highlights, 'black' )
  const strokeWidth = (strokeCol==='black') ? '' : '1.4'
  const stlC = {fill:fillCol, stroke:strokeCol, strokeWidth: strokeWidth}

  // Do the right kind of clicks
  const isAllowedCounty = (allowedCounties.includes(c.name))
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
export default function StateMap( props ) {
  const {
    highlights, 
    counties,
  } = props
  const stl = {fill:'#d0d0d0',strokeWidth:'.17829'}

  // Sort so highlighted counties are last and thus drawn on top of other counties
  const isHighlighted = (x)=> Object.keys(highlights).includes(x.name)
  let countiesWithHighlightsLast = [...counties]
  countiesWithHighlightsLast.sort( (x)=> (isHighlighted(x)) ? 1 : -1 )
  console.log(countiesWithHighlightsLast[countiesWithHighlightsLast.length-1].name)

  return (
    <svg viewBox="0 0 989.98 380" version="1.0">
      <g id="counties" 
        transform="translate(-3850 -2640) rotate(10) scale(5.8)" 
        style={stl}
      >
        {countiesWithHighlightsLast.map( (c)=>{
          return renderOneCounty( c, props )
        })}
      </g>
    </svg>
  )
}