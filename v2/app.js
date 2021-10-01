const inc = document.querySelector('#inc')
const dec = document.querySelector('#dec')
const userInput = document.querySelector('#user-input')
const output = document.querySelector('#output')

var size = 32 //-- global

inc.addEventListener('click', () => {
  size = size + 2
  output.innerText = userInput.value
  output.style.fontSize = `${size}px`
})

dec.addEventListener('click', () => {
  size = size - 2
  output.innerText = userInput.value
  output.style.fontSize = `${size}px`
})
