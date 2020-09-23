import React from "react"

const OnePickCountyBtn = (x, props)=>{
  const {
    picked, 
    doClick
  } = props
  const klass = 'pick-county-btn ' + ((x===picked) ? ' highlighted' : '')
  return (
    <span key={x}>
      <span className={klass} onClick={()=>doClick(x)}>
        {x}
      </span>
      {' '}
    </span>
  )
}

const PickCounty = ( props )=>{
  return (
    <div className="pick-county-div">
      {props.enabledRegions.map( (x)=>{ 
        return OnePickCountyBtn( x, props )
      })}
    </div>
  )
}
export default PickCounty