// !FETCH API by .then

fetch('https://api.chucknorris.io/jokes/random')
  .then(response => {
    return response.json()
  })
  .then(data => {
    var joke = data.value
    console.log('joke : ', joke)
  })
  .catch(err => console.log('err', err))
