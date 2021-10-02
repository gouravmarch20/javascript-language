const userInput = document.querySelector('#user-input')
const login = document.querySelector('#login')
const output = document.querySelector('#output')
login.addEventListener('click', () => {
  if (userInput.value.length >= 5) {
    login.style.backgroundColor = 'green'
    output.innerText = 'login sucess'
  } else {
    login.style.backgroundColor = 'red'
  }
})
