export function memoize(fn) {
  let cache = {}, key
  return (...args) => {
    key = JSON.stringify(args)
    // console.log(`memoize() ${(cache[key]) ? 'sped up' : 'storing'} ${key}`)
    return cache[key] || (cache[key] = fn(...args))
  }
}// Usage:
// const hugeJson = { a: `["BIGGEST JSON EVER"]` }
// const getHugeJsonSlow = (key) => JSON.parse( hugeJson[key] )
// const getHugeJson = memoize(getHugeJsonSlow)
// console.log( getHugeJson('a') )
// console.log( getHugeJson('a') )
// console.log( getHugeJson('a') )
// // memoize() storing ["a"]
// // ["BIGGEST JSON EVER"]
// // memoize() sped up ["a"]
// // ["BIGGEST JSON EVER"]
// // memoize() sped up ["a"]
// // ["BIGGEST JSON EVER"]