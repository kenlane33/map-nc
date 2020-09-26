import {scoreToColor, hashStrToGrey} from './../../helpers/colorGen'

const rndScore      = ()=>Math.random()
const rndScoreColor = ()=>scoreToColor( rndScore() )

export const fakeFillColorFn = (partNm,enabledList) => {
  const inList = (enabledList.includes(partNm))
  return(
    (inList) ? rndScoreColor() : hashStrToGrey(partNm) 
  )
}
