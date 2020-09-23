import {samplePercent} from './arrayHelp'

//-----------///////////////---------------------
export const fakeRegionProps = (regionName, propsByRegion, partsByRegion)=> {
  const partNames = partsByRegion[regionName]().map(x=>x.name)
  const percentToSample = ((Math.random()*0.1) + 0.1) // 10% to 20%
  return ({
    viewBox:"0 0 980 600", 
    transform:"translate(0 0.1) scale(1)",
    allowed: samplePercent( partNames, percentToSample ),
  })
}
//-----------///////////////---------------------
export const getPropsByRegion = (regionName, propsByRegion, partsByRegion)=> {
  const r = propsByRegion[regionName]
  if (r) return r
  else {
    return fakeRegionProps(regionName, propsByRegion, partsByRegion)
  }
}
