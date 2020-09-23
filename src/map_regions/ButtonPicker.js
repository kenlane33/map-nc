import React from "react"

const OnePickRegionBtn = (x, props)=>{
  const {
    picked, 
    doClick
  } = props
  const klass = 'pick-region-btn ' + ((x===picked) ? ' highlighted' : '')
  return (
    <span key={x}>
      <span className={klass} onClick={()=>doClick(x)}>
        {x}
      </span>
      {' '}
    </span>
  )
}

const ButtonPicker = ( props )=>{
  return (
    <div className="pick-region-div">
      {props.enabledParts.map( (x)=>{ 
        return OnePickRegionBtn( x, props )
      })}
    </div>
  )
}
export default ButtonPicker