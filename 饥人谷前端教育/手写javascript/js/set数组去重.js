const arr = [3,3,4,3,'a','a']
function removeDuplicate(arr){
return [...new Set(arr)] 
}
console.log(removeDuplicate(arr))