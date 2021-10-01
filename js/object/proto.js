// ! Prototype : widely use in large opplication --> to add coustom  property in object

//  js has inbulid porperty too --> according to datatype in protype
// new triger give  prototype  same instance as  its object
// -- property task allow do CRED OR NOT

//  --- As CLASS
const User = function (name, roll) {
  this.name = name
  this.roll = roll
  //   this.getName = function () {
  //     console.log(`the name is ${name}`)
  //   }
}
var gourav = new User('gourav ', 'founder')

User.prototype.getName = function () {
  console.log(`Your firstname is : ${this.roll}`)
}

if (gourav.hasOwnProperty('roll')) {
  gourav.getName()
}
