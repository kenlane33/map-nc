import React from "react"

//----/////////////////----------------------------
const OnePickRegionBtn = (name, props)=>{
  const {
    picked, 
    doClick,
    abbreviations
  } = props

  const klass = 'pick-region-btn ' + ((name===picked) ? ' highlighted' : '')
  const longName = abbreviations && abbreviations[name]
  const stl = (longName) ? {}: {padding:'8px 14px'}
  return (
    <span key={name}>
      <span 
        className={klass} 
        onClick={()=>doClick(name)}
        style={stl}
      >
        {name}
        {longName && 
          <div className='pick-region-btn-long-name'>
            {longName}
          </div>
        }
      </span>
      {' '}
    </span>
  )
}
// docker save cortexregistry.azurecr.io/tanjo-brain:12341 | gzip > tanjo-brain-docker-container.tar.gz
// docker run -it -p 3000:3000 -e DAEMON=none -v /Users/kenlane/git/rti:/app/rails --entrypoint /bin/bash cortexregistry.azurecr.io/tanjo-brain:12341
//----/////////////---------------------
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