let obj = {a: 1}
const arr = [3, 3, obj, obj, 'a', 'a']
function removeDuplicate(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index)
}
console.log( removeDuplicate(arr) )