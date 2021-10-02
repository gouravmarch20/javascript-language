var readlineSync = require('readline-sync')
var news = readlineSync.question('Enter the news you had heard ? ')

console.log('select the source where you hear news ')

var source = readlineSync.question(
  ' a> facebook \n b> linkedin \n c> whatapp \n d> other way \n '
)

switch (source) {
  case 'a':
    console.log('your news is fake')

    break
  case 'b':
    console.log('correct')
    console.log(`${news} \n right source `)
    break
  case 'c':
    console.log('your news is fake')
    break
  case 'd':
    console.log('correct')
    console.log(`${news} \n right source `)

    break

  default:
    console.log('you had not seceted correct option')
    break
}
