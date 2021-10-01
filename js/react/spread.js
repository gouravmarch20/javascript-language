// * spread / rest operator syntax   ---> ...arguments

// spread opetator --> break the datatype & store each into an array datatype
//  spread operator --> 
var myArray = [4, 7, 9]
console.log(...myArray)
// rest operator
function sum (...args) {
  let sum = 0
  for (const iterator of args) {
    sum += iterator
  }
  return sum
}
console.log(sum(4, 2, 6))
