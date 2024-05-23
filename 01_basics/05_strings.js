const name = "Bishal_01-xyz"
const repoCount = 15

// console.log(name + repoCount + "Kar")
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Bishal')

// console.log(gameName[0]);
// console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt('5'))
// console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 3)
console.log(anotherString)

const newStringOne = "           Bishal "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://Bisjhal.com/hyiwhrhw%20kar"

console.log(url.replace('%20', '-'))

console.log(url.includes('kar'))

// console.log(name.split('-'))
console.log(name.split('_'))