// !

const userNoOne = document.querySelector('#user-no-one')
const userNoTwo = document.querySelector('#user-no-two')

const btnOne = document.querySelector('#btn-1')
const btnTwo = document.querySelector('#btn-2')
const btnThree = document.querySelector('#btn-3')
const btnFour = document.querySelector('#btn-4')

const output = document.querySelector('#output')
function add () {
  output.innerText = Number(userNoOne.value) + Number(userNoTwo.value)
}
btnOne.addEventListener('click', add)
