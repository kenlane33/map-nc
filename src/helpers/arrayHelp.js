//-----------//////-------------------------
export const samplePercent = ( arr, per=0.1 ) => (
  sample(arr, arr.length*per)
)
//-----------//////-------------------------
export const sample = ( arr, n=1 ) => (
  arr
    .map(v => ({ val:v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(y => y.val)
    .slice(0, n)
)
