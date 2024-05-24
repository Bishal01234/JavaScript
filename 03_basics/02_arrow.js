const user = {
    username: "Bishal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Bishal"
//     console.log(this.username)
// }

// chai()


const tea = () => {
    let username = "Bishal"
    console.log(this.username);
}

// tea()

// const addOne = (num1, num2) =>  ( num1 + num2 )
const addOne = (num1, num2) =>  ({username : "Bishal"})

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addOne(2,4));
console.log(addTwo(6,4));


const myArr = [1,2,3,4,5]

myArr.forEach()