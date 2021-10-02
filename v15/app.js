//! 15 , 16 , 17 
const objOne = {
  name: 'ram ',
  age: 23,
  yuga: 'treta '
}
const objTwo = {
  name: 'ram ',
  age: 23,
  yuga: 'treta '
}

function setAge (objOne, objTwo) {
  objOne.age = 44
  objTwo.age = 55
}
setAge(objOne, objTwo)

console.log(objOne);