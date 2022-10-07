const arr = [3, 3, {a: 1}, {a: 1}, [3,4,5], [3,4,5], 'a', 'a']
function removeDuplicate(arr) {
  let set = new Set()
  return arr.filter(v => {
    if(typeof v === 'object' && v!== null) {
      v = JSON.stringify(v)
    } 
    if(set.has(v)) return false
    set.add(v)
    return true
  })
}
console.log( removeDuplicate(arr) )