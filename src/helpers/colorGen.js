

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
