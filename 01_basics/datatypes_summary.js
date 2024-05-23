// #Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreVal = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")

// console.log(id == anotherId)
// console.log(anotherId)
// console.log(id)


const bigNum = 183754875413784326946932n



// Reference(Non Primitive)

// Array, Objects, Functions


const heros = ["A", "B", "C", "D"];

let myBio = {
    name: "Bishal",
    age: "22",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNum)
console.log(typeof userEmail)
console.log(typeof outsideTemp)
console.log(typeof myFunction)
