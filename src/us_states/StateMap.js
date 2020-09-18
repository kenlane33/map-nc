import React from "react"
import {stringToColor, stringToGrey} from './../helpers/colorGen'

export default function StateMap( props ) {
  const stl = {fill:'#d0d0d0',strokeWidth:'.17829',stroke:'blue'}
  const stateNm = props.stateNm || '<State>'
  return (
    <svg viewBox="0 0 989.98 627.07" version="1.0">
      {props.children}
      <g id="counties" transform="translate(-3850 -2640) rotate(10) scale(5.8)" style={stl}>
        {props.counties.map( x=>{
          const displayNm = x.name + ', ' + stateNm
          const countyColor = stringToGrey(displayNm+'x') //stringToColor(displayNm+'x')
          const stlC = {fill:countyColor}
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