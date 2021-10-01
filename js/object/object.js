// ! NOTE :   this keyword fail in arrow function

// this point to given object if it call from ---> object.fuctionName() , or inside function
// this point to global context if --> function call without object changing , all remain  use

const objOne = {
  name: 'gourav ',
  course: function () {
    return `${this.name} has bought 3 course from lco`
  }
}

// console.log(objOne.name)
console.log(objOne.course())
