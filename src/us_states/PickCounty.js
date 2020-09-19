import React from "react"

const PickCounty = ({allowed, picked, doClick}) => {
  return (
    <div>
      {allowed.map( x => { 
        const stl = {
          background:(x===picked)?'#99e':'#eee',
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