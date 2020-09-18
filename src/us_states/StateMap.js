import React from "react"

export default function StateMap(props) {
  const stl = {fill:'#d0d0d0',strokeWidth:'.17829',stroke:'blue'}
  const stateNm = props.stateNm || 'NC'

  return (
    <svg viewBox="0 0 989.98 627.07" version="1.0">
      {props.children}
      <g id="counties" transform="translate(-3850 -2640) rotate(10) scale(5.8)" style={stl}>
        {props.counties.map( x=>{ 
          return (
            <path 
              id={x.id} 
              d={x.d} 
              style={{fill:Math.floor(Math.random()*16777215).toString(16)}}
              >
              <title>{x.name}, {stateNm}</title>
            </path>
          )
        })}
      </g>
    </svg>
  )
}