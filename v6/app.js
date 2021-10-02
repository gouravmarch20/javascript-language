var readlineSync = require('readline-sync')

let name,
  highestMark = 0,
  sum = 0

for (i = 0; i < 5; i++) {
  userName = readlineSync.question('May I have your name? ')

  let m1 = readlineSync.question('unit test? ')
  let m2 = readlineSync.question('pre final? ')
  let m3 = readlineSync.question('final ? ')

  sum = Number(m1) + Number(m2) + Number(m3)
  if (highestMark < sum) {
    name = userName
    highestMark = sum
    console.log(`${name} ${highestMark}`)
  }
}

console.log(`$ the highest score {name} ${highestMark}`)
