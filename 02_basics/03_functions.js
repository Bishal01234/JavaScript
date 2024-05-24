function sayMyName(){
    console.log("B");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "ram"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("bishal"))
// console.log(loginUserMessage("bishal"))


// **************************************************


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(40, 50, 60, 70, 80));

const user = {
    username: "bishal",
    price: 99,
}

function handleObject(anyObject){
    console.log(`Username id ${anyObject.username} and name is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "RAM",
    price: 199
})


    
const myNewArr = [100, 200, 300, 400]

function returnSecVal(getArr){
    return getArr[1]
}

// console.log(returnSecVal(myNewArr));
console.log(returnSecVal([200, 300, 400, 500]));







