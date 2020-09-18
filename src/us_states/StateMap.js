import React from "react"
import {changeLumInHslStr, hashStrToGrey, scoreToColor, stringToColor, stringToGrey} from './../helpers/colorGen'

const overrideMaybe = (key, lookup, defaultVal) => {
  return ( Object.keys(lookup).includes( key ) ) ? lookup[key] : defaultVal
}
const rndScore = () => Math.random()

//----------------------/////////----------------------
export default function StateMap( props ) {
  const stl = {fill:'#d0d0d0',strokeWidth:'.17829',stroke:'blue'}
  const stateNm = props.stateNm || '<State>'
  const fills = {
    Ashe:scoreToColor( rndScore() ), 
    Buncombe:scoreToColor( rndScore() ), 
    Gates:scoreToColor( rndScore() ), 
    Mecklenburg:scoreToColor( rndScore() ), 
    'New Hanover':scoreToColor( rndScore() ), 
    Robeson:scoreToColor( rndScore() ),
    Wake:scoreToColor( rndScore() ),
  }
  const highlights = {Wake:changeLumInHslStr(fills['Wake'], '30%')}
  return (
    <svg viewBox="0 0 989.98 627.07" version="1.0">
      {props.children}
      <g id="counties" transform="translate(-3850 -2640) rotate(10) scale(5.8)" style={stl}>
        {props.counties.map( x=>{
          const displayNm = x.name + ', ' + stateNm
          // const countyColor = stringToGrey(displayNm+'x') //stringToColor(displayNm+'x')
          const countyColor = hashStrToGrey(x.name)
          const fillCol = overrideMaybe( x.name, fills, countyColor )//( Object.keys(countyScores).includes( x.name ) ) ? countyScores[x.name] : countyColor
          const strokeCol = overrideMaybe( x.name, highlights, 'black' )
          const strokeWidth = (strokeCol==='black') ? '' : '1.4'
          const stlC = {fill:fillCol, stroke:strokeCol, strokeWidth: strokeWidth}
          return (
            <path
              className='svg-path'
              key={x.id}
              id={x.id}
              d={x.d}
              style={stlC}
              onClick={ev=>console.log(displayNm)}
            >
              <title>
                {displayNm}
              </title>
            </path>
          )
        })}
      </g>
    </svg>
  )
}