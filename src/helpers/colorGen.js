
export const scoreToColor = (score, sat=100, lum=50, start=0, end=150) => {
  if ( (score > 1.0) || (score < 0.0) )
  {
    console.error('ERROR: score out of 0.0 to 1.0 range in scoreToColor()')
    return 'black'
  }
  const hue = ((1.0-score) * (start - end))+end;
  return 'hsl(' + hue + ','+sat+'%,'+lum+'%)';
}

export const hashStrToGrey = (s) => {
  return scoreToGrey( (hashStrToScore(s) * 0.2 ) +.4 ) 
}

export const scoreToGrey = (score, start=0, end=150) => {
  if ( (score > 1.0) || (score < 0.0) )
  {
    console.error('ERROR: score out of 0.0 to 1.0 range in scoreToColor()')
    return 'black'
  }
  const lum = ((1.0-score) * (start - end))+end;
  return 'hsl(' + 0 + ','+0+'%,'+lum+'%)';
}

export const hashStrToScore = (s) => {
  var hash = 0, i;
  const maxInt = (Math.pow(2,32)-1)//
  for (i = 0; i < s.length; i++) {
    hash  = ((hash << 5) - hash) + s.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  const ret = ((hash+0.0) / (maxInt + 0.0) ) +0.5
  //console.log(ret)
  return ret;
}

export const stringToColor = (str) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = '#';
  for (var j = 0; j < 3; j++) {
      var value = (hash >> (j * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

export const stringToGrey = (str) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = '#';
  for (var j = 0; j < 3; j++) {
      var value = hash & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}
export const randColor=()=>Math.floor(Math.random()*16777215).toString(16)

export const changeLumInHslStr = ( hslStr, percent ) => {

  //console.log(hslStr)
  const regexp = /hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g
  const res = regexp.exec(hslStr)
  if (res==null) return hslStr;
  //console.log(res)
  return `hsl(${res[1]},${res[2]},${percent})`
}