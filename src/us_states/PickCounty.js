import React from "react"

const PickCounty = (props)=>{
  const {
    allowedCounties, 
    picked, 
    doClick
  } = props
  return (
    <div>
      {allowedCounties.map( x => { 
        const stl = {
          background:(x===picked)?'#44e':'#eee',
          color:(x===picked)?'white':'black',
        }
        return (
          <span key={x}>
          <span 
            className="pick-county-btn"
            style={stl}
            onClick={()=>doClick(x)}
          >
            {x}
          </span>
          {' '}
          </span>
        )
      })}
    </div>
  )
}
export default PickCounty