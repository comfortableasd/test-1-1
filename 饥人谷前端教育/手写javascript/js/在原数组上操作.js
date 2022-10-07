let obj = { a: 1 }
const arr = [3, 3, obj, obj, 'a', 'a']
function removeDuplicate(arr) {
    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i])
        }
        else {
            arr.splice(i, 1)
            i--
        }
    }
}
removeDuplicate(arr)
console.log(arr)