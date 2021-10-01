// !FETCH API by .then

//  -- quick test api : on console

fetch('https://api.chucknorris.io/jokes/random')
  .then(response => {
    return response.json()
  })
  .then(data => {
    var joke = data.value
    console.log('joke : ', joke)
  })
  .catch(err => console.log('err', err))
// forn
// fetch('https://api.chucknorris.io/jokes/random')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log('Data is : ', data)
//   })
//   .catch()
