

// *****************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Bishal"
let anotherName = myName
anotherName = "Kar"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user!123@gmail.com",
    upi: "user@ybi",
}

let userTwo = userOne

userTwo.email = "Bishal@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


