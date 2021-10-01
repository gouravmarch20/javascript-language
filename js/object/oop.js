//  here this means create an varible inside it's pointing object & asign the value
/*
 * New keyword :

1. we able to create coustom data & asign  it to varible   
2. invoke constructor --> each time it call unique instance --> CLASS SAI MULTIPLE OBJECT CREATION 
3. regular function call ko convert into object chaning function call so that this keyword able to point at given object
 */
//- PROTOTYPE ACCORDING TO THIS REST OBJECT MADE
const User = function (name, roll) {
  this.name = name
  this.roll = roll
  this.getData = function () {
    console.log(`The name is ${this.gourav}`)
    return `his role is ${this.roll}`
  }
}
// ---> constrouctor
var gourav = new User('Gourav', 'no code ') //2 , 3 , 1
var hitesh = new User('hitesh', 'tutor ') //2 , 3 , 1
// --> output
console.log(gourav)
console.log(gourav.getData())

console.log(hitesh) //2.
console.log(hitesh.getData())
