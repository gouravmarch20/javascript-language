// !

const numOne = document.querySelector('#num-one')
const numTwo = document.querySelector('#num-two')

const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const mul = document.querySelector('#mul')
const divide = document.querySelector('#divide')

const output = document.querySelector('#output')

add.addEventListener('click', function () {
  output.innerText = Number(numOne.value) + Number(numTwo.value)
})
sub.addEventListener('click', function () {
  output.innerText = Number(numOne.value) - Number(numTwo.value)
})
mul.addEventListener('click', function () {
  output.innerText = Number(numOne.value) * Number(numTwo.value)
})
divide.addEventListener('click', function () {
  output.innerText = Number(numOne.value) / Number(numTwo.value)
})
