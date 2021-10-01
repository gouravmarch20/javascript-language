const arrOne = [2, 4, 6]
const objOne = {
  name: 'gourav',
  tw: 'twitter'
}
//* for each  -->  not return any thing , just array  methord to itterate array
arrOne.forEach(array => array)
//  map
// for in
for (const key in objOne) {
  console.log(key)
  console.log(objOne[key])
}
// for of  --> ARRAY
for (const item of arrOne) {
  console.log(item)
}
