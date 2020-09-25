import React from "react"
import {hashStrToGrey} from './../helpers/colorGen'
//import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'
const el = React.createElement
const overrideMaybe = (key, lookup, defaultVal) => {
  return ( Object.keys(lookup).includes( key ) ) ? lookup[key] : defaultVal
}
//----////////////////----------------------------------
const renderOnePart = (part, props, i) => {
  const {
    highlights,
    fillColors, 
    enabledParts,
    doClickEnabledPart,
    doClickDisabledPart, 
    regionName='<State>', // default value <State>
    regionProps
  } = props
  const displayNm = part.name + ', ' + regionName

  // Fill & stroke Colors for a county
  const partCol = hashStrToGrey(part.name)
  const fillCol = overrideMaybe( part.name, fillColors, partCol )//( Object.keys(countyScores).includes( x.name ) ) ? countyScores[x.name] : countyColor
  const strokeCol = overrideMaybe( part.name, highlights, null )
  //const strokeWidth = (strokeCol==='black') ? '' : '1.4'
  const osw = regionProps.highlightStrokeWidth && regionProps.highlightStrokeWidth
  const strokeWidth = (strokeCol) ? (osw||'1.4') : ''
  const stlC = {fill:fillCol, stroke:strokeCol, strokeWidth: strokeWidth}

  // Do the right kind of clicks
  const isAllowedCounty = (enabledParts.includes(part.name))
  const clk = isAllowedCounty ? 
                ()=>{doClickEnabledPart(part.name) }  : 
                ()=>{doClickDisabledPart(part.name)}
  const elAttrs = {
    className: 'svg-path map-part-border',
    key: `${part.tag} ${part.id} ${i}`,
    id: part.id,
    style: stlC, 
    onClick: clk, 
  }
  if (part.tag) {return (el(
    part.tag,
    {...part, ...elAttrs}
  ))}
  else
  return (
       <path
         className='svg-path map-part-border'
         key={part.id + i}
         id={part.id}
         d={part.d}
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
        {sortedParts.map( (p,i)=>{

          if (! Array.isArray(p.d)) {
            return renderOnePart( p, props, i )
          } else {
            return (
              <g key={'g'+p.name+i}>
                {p.d.map((x,j)=>renderOnePart( p, props, j ))}
              </g>
            )
          }

        })}
      </g>
    </svg>
  )
}