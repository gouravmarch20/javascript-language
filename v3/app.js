const userInput = document.querySelector('#user-input')
const headingOne = document.querySelector('#heading-one')
const headingTwo = document.querySelector('#heading-two')
const headingThree = document.querySelector('#heading-three')

const output = document.querySelector('#output')

headingOne.addEventListener('click', () => {
  output.innerHTML = `<h1> ${userInput.value}</h1>`
  output.style.color = 'red'
})
headingTwo.addEventListener('click', () => {
  output.innerHTML = `<h2> ${userInput.value}</h2>`
  output.style.color = 'blue'
})
headingThree.addEventListener('click', () => {
  output.innerHTML = `<h3> ${userInput.value}</h3>`
  output.style.color = 'green'
})
